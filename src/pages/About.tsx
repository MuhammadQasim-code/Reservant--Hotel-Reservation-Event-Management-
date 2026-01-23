import { Card } from 'antd';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative bg-slate-800 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Story</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From humble beginnings to a premier dining destination.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: The Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">A Tradition of Excellence</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2010, <span className="font-bold text-amber-600">RESERVENT</span> started with a simple mission: 
              to blend culinary artistry with exceptional hospitality. What began as a small family bistro 
              has grown into a landmark destination for food lovers and event planners alike.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that every meal is a celebration. Whether it is a quiet dinner for two or a 
              grand wedding reception, our team puts their heart and soul into every detail.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Our Chef" 
              className="object-cover w-full h-full transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Section 2: Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg border-t-4 border-t-amber-500 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-500">We source locally whenever possible to ensure the highest quality and freshest taste.</p>
          </Card>
          <Card className="shadow-lg border-t-4 border-t-amber-500 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2">Master Chefs</h3>
            <p className="text-gray-500">Our culinary team is led by award-winning chefs with decades of global experience.</p>
          </Card>
          <Card className="shadow-lg border-t-4 border-t-amber-500 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-4">🥂</div>
            <h3 className="text-xl font-bold mb-2">Premium Service</h3>
            <p className="text-gray-500">Hospitality isn't just a job for us; it's our passion. We treat every guest like family.</p>
          </Card>
        </div>

      </div>
    </div>
  );
}