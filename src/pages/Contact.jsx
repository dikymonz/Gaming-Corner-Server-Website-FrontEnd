const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Hubungi Kami</h2>
        
        <div className="bg-emerald-50 p-10 rounded-3xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nama Lengkap" className="p-4 rounded-2xl border" />
              <input type="email" placeholder="Email" className="p-4 rounded-2xl border" />
            </div>
            <input type="text" placeholder="Nomor WhatsApp" className="p-4 w-full rounded-2xl border" />
            <textarea placeholder="Pesan Anda..." rows={6} className="p-4 w-full rounded-2xl border"></textarea>
            
            <button type="submit" className="w-full bg-emerald-600 text-white py-5 text-xl rounded-2xl hover:bg-emerald-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;