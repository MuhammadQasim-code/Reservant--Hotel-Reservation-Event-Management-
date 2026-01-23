import { Link } from 'react-router-dom';
import { Button } from 'antd';

const services = [
  {
    title: 'Fine Dining',
    desc: 'Experience world-class cuisine in our elegant main hall. Perfect for romantic dates and family dinners.',
    icon: '🍽️',
    link: '/tablereserve',
    btnText: 'Book a Table'
  },
  {
    title: 'Event Hosting',
    desc: 'Full-service event planning for weddings, birthdays, and meetings. We handle decor, music, and food.',
    icon: '🎉',
    link: '/eventplan',
    btnText: 'Plan an Event'
  },
  
 
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-slate-800 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-gray-300">More than just a restaurant.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Left: Icon/Visual Area */}
              <div className="bg-amber-50 md:w-1/3 flex items-center justify-center p-8">
                <span className="text-6xl">{service.icon === 'jx' ? '🚪' : service.icon}</span>
              </div>
              
              {/* Right: Content Area */}
              <div className="p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                </div>
                <Link to={service.link}>
                  <Button type="primary" size="large" className="bg-amber-600 hover:bg-amber-700! w-full md:w-auto font-semibold">
                    {service.btnText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}