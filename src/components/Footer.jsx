import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Lombok Serenity</h3>
          <p className="text-emerald-200">Pengalaman mewah di pantai Lombok yang tenang.</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Kontak</h4>
          <div className="space-y-3">
            <p className="flex items-center gap-3"><MapPin size={20} /> Senggigi, Lombok Barat</p>
            <p className="flex items-center gap-3"><Phone size={20} /> +62 812-3456-7890</p>
            <p className="flex items-center gap-3"><Mail size={20} /> info@lombokserenity.com</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-emerald-200">
            <a href="#packages">Our Packages</a>
            <a href="#why">Why Choose Us</a>
            <a href="#contact">Book Now</a>
          </div>
        </div>
      </div>
      <div className="text-center text-emerald-400 mt-10 border-t border-emerald-800 pt-6">
        © 2026 Lombok Serenity Resort. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;