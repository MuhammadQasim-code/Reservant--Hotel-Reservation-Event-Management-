import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';
import { Input, Select, Button, Checkbox, Card } from 'antd';

const { TextArea } = Input;

// --- Updated Data Variables ---
const eventTypes = [
  { value: 'Birthday', label: 'Birthday Party' },
  { value: 'Anniversary', label: 'Anniversary' },
  { value: 'Wedding', label: 'Wedding / Reception' },
  { value: 'Meeting', label: ' Meeting' },
 
];

const guestRange = [
  { value: '2-10', label: '02 - 10 Guests' },
  { value: '10-30', label: '10 - 30 Guests' },
  { value: '30-50', label: '30 - 50 Guests' },
  { value: '50-100', label: '50 - 100 Guests' },
  { value: '100+', label: '100+ Guests' },
];

const servicesOptions = [
  { label: 'Photography ($50)', value: 'Photography' },
  { label: 'Live Music  ($150)', value: 'Music' },
  { label: 'Custom Cake ($40)', value: 'Cake' },
  { label: 'Floral Decorations ($80)', value: 'Decorations' },
];

interface EventFormInputs {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  guestRange: string;
  date: Date | null;
  time: string;
  services: string[];
  additionalNotes: string;
}

export default function EventForm() {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<EventFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      guestRange: '',
      date: new Date(),
      time: '',
      services: [],
      additionalNotes: '',
    }
  });

  const onSubmit = async (data: EventFormInputs) => {
    setLoading(true);
    
    // Simulate network request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form Data Captured:', data);
    toast.success('Event quotation sent! (Check console for data)');
    
    setLoading(false);
    reset(); 
  };

  return (
    <Card className="shadow-xl rounded-xl border-t-4 border-t-amber-500 relative">
      <Toaster position="top-center" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-4">
        
        {/* 1. Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-slate-700 border-b pb-2 mb-4">Organizer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <Input {...field} size="large" status={errors.fullName ? 'error' : ''} placeholder="John Doe" />
                )}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                }}
                render={({ field }) => (
                  <Input {...field} type="email" size="large" status={errors.email ? 'error' : ''} placeholder="john@example.com" />
                )}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: 'Phone is required' }}
                render={({ field }) => (
                  <Input {...field} size="large" status={errors.phone ? 'error' : ''} placeholder="+1 555 000 0000" />
                )}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>
        </div>

        {/* 2. Event Details */}
        <div>
          <h3 className="text-lg font-bold text-slate-700 border-b pb-2 mb-4">Event Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <Controller
                name="eventType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    size="large"
                    style={{ width: '100%' }}
                    options={eventTypes} 
                  />
                )}
              />
            </div>

            {/* Guest Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Guests</label>
              <Controller
                name="guestRange"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    size="large"
                    style={{ width: '100%' }}
                    options={guestRange}
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Picker */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <Controller
                name="date"
                control={control}
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date:any) => field.onChange(date)}
                    minDate={new Date()}
                    className="w-full p-2 border border-gray-300 rounded-md h-10 hover:border-blue-400 transition"
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                  />
                )}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <Controller
                name="time"
                control={control}
                rules={{ required: 'Time is required' }}
                render={({ field }) => (
                  <Input {...field} type="time" size="large" status={errors.time ? 'error' : ''} />
                )}
              />
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
            </div>
          </div>
        </div>

        {/* 3. Services */}
        <div>
          <h3 className="text-lg font-bold text-slate-700 border-b pb-2 mb-4">Add-on Services</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <Controller
              name="services"
              control={control}
              render={({ field }) => (
                <Checkbox.Group 
                  options={servicesOptions}
                  value={field.value}
                  onChange={(checkedValues) => field.onChange(checkedValues)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                />
              )}
            />
          </div>
        </div>

        {/* 4. Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Specific Requirements</label>
          <Controller
            name="additionalNotes"
            control={control}
            render={({ field }) => (
              <TextArea 
                {...field} 
                rows={4} 
                placeholder="E.g. Theme colors, vegan options, specific table arrangements..." 
              />
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large" 
            block 
            loading={loading}
            className="bg-slate-800 hover:bg-slate-700! h-14 text-lg font-bold tracking-wide"
          >
            Request Event Quotation
          </Button>
        </div>

      </form>
    </Card>
  );
}