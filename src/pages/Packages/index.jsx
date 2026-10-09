const Packages = () => {
  const packages = [
    {
      title: "Romantic Getaway",
      price: "Rp 4.500.000",
      duration: "3 Hari 2 Malam",
      features: ["Villa Private Pool", "Candlelight Dinner", "Spa Couple", "Snorkeling"]
    },
    {
      title: "Family Adventure",
      price: "Rp 6.800.000",
      duration: "4 Hari 3 Malam",
      features: ["Family Villa", "Kids Club", "Water Sports", "Full Board"]
    },
    {
      title: "Luxury Wellness",
      price: "Rp 8.200.000",
      duration: "5 Hari 4 Malam",
      features: ["Ocean View Suite", "Daily Yoga", "Full Spa", "Private Chef"]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">Our Packages</h2>
        <p className="text-center text-xl text-gray-600 mb-12">Pilih pengalaman sempurna untuk liburanmu</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="border border-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-4xl font-bold text-emerald-600 mb-1">{pkg.price}</p>
              <p className="text-gray-500 mb-6">{pkg.duration}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">• {f}</li>
                ))}
              </ul>
              
              <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl hover:bg-emerald-700 font-semibold">
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;