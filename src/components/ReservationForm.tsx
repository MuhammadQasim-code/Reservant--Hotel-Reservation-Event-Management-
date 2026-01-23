import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import toast, { Toaster } from 'react-hot-toast';

// Ant Design Components
import { Input, Select, Button } from 'antd';
const { TextArea } = Input;


const MEAL_OPTIONS = [
  { value: 'Breakfast', label: 'Breakfast (8-11 AM)' },
  { value: 'Lunch', label: 'Lunch (12-3 PM)' },
  { value: 'Dinner', label: 'Dinner (6-10 PM)' },
];

const SEATING_OPTIONS = [
  { value: 'Hall', label: 'Main Hall' },
  { value: 'Rooftop', label: 'Rooftop (Scenic View)' },
  { value: 'Private Room', label: 'Private Room (+$20)' },
];

const MENU_TIER_OPTIONS = [
  { value: 'Standard', label: 'Standard Menu' },
  { value: 'Premium', label: 'Premium Menu' },
  { value: 'Custom', label: 'Custom / A La Carte' },
];

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date(),
    mealType: 'Dinner',
    time: '',
    guests: 2,
    seating: 'Hall',
    menuTier: 'Standard',
    specialRequests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData((prev) => ({ ...prev, date }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Submitted Data:', formData);
      toast.success('Table reserved successfully!');
      
    } catch (error) {
      console.error(error);
      toast.error('Failed to reserve table. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Contact Details */}
        <div>
          <h3 className="text-lg font-bold text-gray-700 border-b pb-2 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                name="name"
                size="large"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input
                name="phone"
                size="large"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2: Booking Details */}
        <div>
          <h3 className="text-lg font-bold text-gray-700 border-b pb-2 mb-4">Booking Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                className="w-full p-2 border border-gray-300 rounded-md h-10" 
                dateFormat="MMMM d, yyyy"
                minDate={new Date()} 
                required
              />
            </div>

            {/* FIXED: Use options prop instead of JSX children */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meal Type</label>
              <Select
                size="large"
                value={formData.mealType}
                onChange={(value:any) => handleSelectChange(value, 'mealType')}
                style={{ width: '100%' }}
                options={MEAL_OPTIONS} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
              <Input
                type="time"
                name="time"
                size="large"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <Input
                type="number"
                name="guests"
                size="large"
                min={1}
                max={20}
                value={formData.guests}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3: Preferences */}
        <div>
          <h3 className="text-lg font-bold text-gray-700 border-b pb-2 mb-4">Preferences</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* FIXED: Use options prop */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seating Area</label>
              <Select
                size="large"
                value={formData.seating}
                onChange={(value:any) => handleSelectChange(value, 'seating')}
                style={{ width: '100%' }}
                options={SEATING_OPTIONS}
              />
            </div>

            {/* FIXED: Use options prop */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Menu Tier</label>
              <Select
                size="large"
                value={formData.menuTier}
                onChange={(value:any) => handleSelectChange(value, 'menuTier')}
                style={{ width: '100%' }}
                options={MENU_TIER_OPTIONS}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests / Allergies
            </label>
            <TextArea
              name="specialRequests"
              rows={3}
              placeholder="E.g. Peanut allergy, wheelchair access needed..."
              value={formData.specialRequests}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={loading} 
            className="bg-amber-600 hover:bg-amber-700! border-none h-12 text-lg font-semibold"
          >
            Confirm Reservation
          </Button>
          <p className="text-center text-xs text-gray-400 mt-4">
            By booking, you agree to our reservation policies.
          </p>
        </div>
      </form>
    </div>
  );
}