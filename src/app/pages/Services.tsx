import { motion } from 'motion/react';
import {
  Home,
  Building2,
  Palette,
  MapPin as MapPinIcon,
  PenTool,
  Lightbulb,
  Ruler,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Desain Arsitektur',
      description:
        'Layanan desain arsitektur komprehensif untuk residential, commercial, dan industrial. Kami menciptakan desain yang inovatif, fungsional, dan estetis sesuai dengan kebutuhan klien.',
      features: [
        'Site Analysis & Planning',
        'Konsep Desain & Sketsa',
        'Gambar Kerja Detail',
        'Visualisasi 3D Realistis',
        'Bill of Quantity (BOQ)',
      ],
    },
    {
      icon: Palette,
      title: 'Desain Interior',
      description:
        'Menciptakan interior yang harmonis antara estetika dan fungsi. Dari pemilihan material, furniture, hingga pencahayaan untuk menciptakan atmosfer yang sempurna.',
      features: [
        'Space Planning',
        'Material Selection',
        'Custom Furniture Design',
        'Lighting Design',
        'Color Consultation',
      ],
    },
    {
      icon: MapPinIcon,
      title: 'Perencanaan Urban',
      description:
        'Perencanaan kawasan dan masterplan yang terintegrasi dengan lingkungan sekitar. Menciptakan ruang publik yang berkelanjutan dan livable.',
      features: [
        'Master Planning',
        'Site Development',
        'Infrastructure Planning',
        'Landscape Design',
        'Environmental Analysis',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Konsultasi',
      description:
        'Layanan konsultasi profesional untuk membantu Anda membuat keputusan terbaik dalam proyek arsitektur. Dari feasibility study hingga construction management.',
      features: [
        'Feasibility Study',
        'Design Review',
        'Construction Supervision',
        'Budget Planning',
        'Regulatory Compliance',
      ],
    },
  ];

  const process = [
    {
      icon: PenTool,
      title: 'Konsultasi Awal',
      description:
        'Meeting untuk memahami kebutuhan, budget, dan timeline proyek Anda.',
    },
    {
      icon: Lightbulb,
      title: 'Pengembangan Konsep',
      description:
        'Brainstorming ide dan presentasi konsep desain yang sesuai visi Anda.',
    },
    {
      icon: Ruler,
      title: 'Desain Detail',
      description:
        'Pengembangan desain lengkap dengan gambar kerja dan spesifikasi teknis.',
    },
    {
      icon: CheckCircle,
      title: 'Implementasi',
      description:
        'Supervisi konstruksi hingga proyek selesai sesuai standar kualitas.',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577561776790-1a20c419b1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2VydmljZXMlMjBkZXNpZ24lMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzcwNTc1Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Layanan Kami
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Solusi arsitektur profesional untuk setiap kebutuhan Anda
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Layanan Profesional Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan arsitektur dengan standar
              profesional tertinggi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-muted/30 p-8 rounded-2xl group hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300"
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-primary" size={14} />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Pendekatan sistematis untuk memastikan kesuksesan proyek Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <step.icon className="text-white" size={36} />
                </motion.div>
                <div className="text-5xl font-bold text-white/20 mb-3">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Mengapa Memilih Layanan Kami?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Tim Profesional Berpengalaman',
                    description:
                      'Arsitek berlisensi dengan pengalaman puluhan tahun dalam berbagai jenis proyek.',
                  },
                  {
                    title: 'Desain Inovatif & Kreatif',
                    description:
                      'Solusi desain yang unik dan sesuai dengan kebutuhan spesifik setiap klien.',
                  },
                  {
                    title: 'Manajemen Proyek Terintegrasi',
                    description:
                      'Koordinasi penuh dari konsep hingga konstruksi untuk memastikan hasil optimal.',
                  },
                  {
                    title: 'Komitmen terhadap Kualitas',
                    description:
                      'Standar kualitas tinggi dalam setiap detail desain dan pelaksanaan.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742440711413-da7afb0f4930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcwNTc1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Hubungi kami untuk konsultasi gratis dan diskusikan bagaimana kami
              dapat membantu mewujudkan visi arsitektur Anda
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
