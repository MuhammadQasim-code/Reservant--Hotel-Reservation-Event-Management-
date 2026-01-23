import ReservationForm from '../components/ReservationForm';

export default function TableReservation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            Reserve Your Table
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Join us for Breakfast, Lunch, or Dinner. We look forward to hosting you.
          </p>
        </div>

        {/* Render the Form Component */}
        <ReservationForm />
        
      </div>
    </div>
  );
}