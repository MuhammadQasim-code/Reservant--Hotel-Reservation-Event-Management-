// src/pages/Home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HERO SECTION */}
      <div className="relative pt-16"> {/* pt-16 accounts for fixed navbar height */}
        <div className="absolute inset-0 h-150 w-full overflow-hidden">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Background" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-150 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            Elevate Your Dining Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
            The ultimate platform for effortless table reservations and seamless event planning. 
            From intimate dinners to grand weddings, we manage it all.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/book-table" 
              className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition transform hover:-translate-y-1"
            >
              Book a Table
            </Link>
            <Link 
              to="/plan-event" 
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Plan an Event
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICES / FEATURES SECTION */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Reservent?</h2>
            <p className="mt-4 text-gray-500">Simplify your hospitality needs with our comprehensive features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Reservations</h3>
              <p className="text-gray-600">Real-time availability checking for dine-in tables. Book your spot in seconds without the phone calls.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="text-gray-600">Planning a birthday or corporate meeting? Customize menus, seating, and special services easily.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Menus</h3>
              <p className="text-gray-600">Explore our diverse menu options, including standard, premium, and custom packages for your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}