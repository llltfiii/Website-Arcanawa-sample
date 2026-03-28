import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    perusahaan: [
      { label: 'Tentang Kami', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Layanan', path: '/services' },
      { label: 'Kontak', path: '/contact' },
    ],
    layanan: [
      { label: 'Desain Arsitektur', path: '/services' },
      { label: 'Desain Interior', path: '/services' },
      { label: 'Perencanaan Urban', path: '/services' },
      { label: 'Konsultasi', path: '/services' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/arcanawa.arsitek/', label: 'Instagram' },
    { icon: Instagram, href: 'https://www.instagram.com/arcanawa.interior/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">ARCANAWA</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Studio arsitektur profesional yang menghadirkan desain modern,
              inovatif, dan berkelanjutan untuk menciptakan ruang yang
              menginspirasi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Jl. Villa Bukit Tidar No.404 Blok B1, Merjosari, Kec. Lowokwaru, Kota Malang,Jawa Timur 65144
                  
                  <br />
                  
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-white/80">+62-812-3355-5232</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-white/80">arcanawa@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8 text-center text-white/60"
        >
          <p>© {currentYear} Arcanawa Architecture Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
