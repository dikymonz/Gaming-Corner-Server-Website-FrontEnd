const WhyChoose = () => {
  const reasons = [
    { title: "Lokasi Terbaik", desc: "Langsung di pantai Senggigi dengan pemandangan sunset terbaik" },
    { title: "Layanan Premium", desc: "Staf profesional dan ramah 24/7" },
    { title: "Eco-Friendly", desc: "Komitmen terhadap kelestarian alam Lombok" },
    { title: "Pengalaman Autentik", desc: "Budaya dan kuliner lokal yang kaya" }
  ];

  return (
    <div className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl mb-6" />
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;