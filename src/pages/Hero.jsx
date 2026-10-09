const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1587502536900-baf0c6f6b5e7')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">Selamat Datang di<br/>Lombok Serenity</h1>
        <p className="text-2xl mb-8">Nikmati ketenangan pantai, luxury resort, dan pengalaman tak terlupakan di Lombok</p>
        <a href="#packages" className="inline-block bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-full text-xl font-semibold transition">
          Lihat Paket Kami
        </a>
      </div>
    </div>
  );
};

export default Hero;