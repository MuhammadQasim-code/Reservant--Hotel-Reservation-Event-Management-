import { Link } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function EventBooking() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* Header Section */}
      <div className="bg-slate-800 py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
          Plan Your Perfect Event
        </h1>
        <p className="text-amber-500 font-medium text-lg uppercase tracking-widest">
          Weddings • Birthdays • Meetings
        </p>
        <div className="mt-6">
           <Link to="/" className="text-gray-400 hover:text-white text-sm underline">
             &larr; Back to Home
           </Link>
        </div>
      </div>

      {/* Form Container with negative margin overlap effect */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <EventForm />
      </div>
      
    </div>
  );
}