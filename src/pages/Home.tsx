import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] font-sans flex flex-col">

      {/* NAVBAR */}
      <HomeNavbar onMenuClick={toggleSidebar} />

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-72
        bg-white/90 backdrop-blur-xl shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        rounded-tr-3xl border-r border-gray-200
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex flex-col space-y-5 mt-4">

          {[
            { to: '/dine-in', label: 'Reserve your Table' },
            { to: '/event-plan', label: 'Plan an Event' },
            { to: '/menu', label: 'Menu Card' },
          ].map((item) => (
            <Link key={item.to} to={item.to}>
              <div className="w-full p-4 rounded-xl bg-[#f5f4f1]
              text-slate-800 font-semibold text-lg
              hover:bg-amber-600 hover:text-white
              transition-all duration-300 shadow-sm">
                {item.label}
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grow pt-16">

        {/* HERO SECTION */}
        <div className="relative h-[85vh] w-full flex items-center justify-center text-center px-4 overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            alt="Restaurant"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

          <div className="relative z-10 max-w-4xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-wide mb-6">
              Elevate Your Dining Experience
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Effortless reservations and elegant event planning —
              crafted for unforgettable moments.
            </p>

            
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Instant Reservations',
                text: 'Real-time availability checking for dine-in tables.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                )
              },
              {
                title: 'Event Management',
                text: 'Customize menus, seating, and services with ease.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0" />
                )
              },
              {
                title: 'Digital Menus',
                text: 'Explore curated menus and custom dining packages.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7" />
                )
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl
                shadow-lg hover:shadow-2xl hover:-translate-y-3
                transition duration-300 text-center"
              >
                <div className="w-14 h-14 bg-amber-100/70 text-amber-600
                rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#f8f7f4] border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <p className="text-slate-900 font-semibold tracking-widest text-lg">
            RESERVENT
          </p>
          <p className="text-gray-500 text-sm">
            Crafted for unforgettable dining experiences.
          </p>
          <p className="text-gray-400 text-xs">
            © 2026 Reservent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
