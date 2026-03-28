import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Calendar, Maximize2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function PortfolioDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Proyek Tidak Ditemukan
          </h2>
          <Link
            to="/portfolio"
            className="text-accent hover:text-primary transition-colors duration-300"
          >
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.mainImage, ...project.images];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Back Button */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Kembali ke Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Main Image Gallery */}
      <section className="relative h-[70vh] bg-black">
        <div className="relative h-full">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gallery Controls */}
          {allImages.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
              >
                <ChevronRight size={24} />
              </motion.button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm tracking-wider mb-6">
                {project.category.toUpperCase()}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
                {project.title}
              </h1>

              {/* Project Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg"
                >
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Lokasi</p>
                    <p className="font-semibold text-foreground">{project.location}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg"
                >
                  <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tahun</p>
                    <p className="font-semibold text-foreground">{project.year}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg"
                >
                  <Maximize2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Luas Area</p>
                    <p className="font-semibold text-foreground">{project.area}</p>
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Deskripsi Proyek
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Concept */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Konsep Desain
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.concept}
                </p>
              </motion.div>

              {/* Client Info */}
              {project.client && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <p className="text-sm text-muted-foreground mb-1">Klien</p>
                  <p className="text-xl font-semibold text-foreground">
                    {project.client}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          >
            Galeri Foto
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setCurrentImageIndex(index + 1)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg">Klik untuk memperbesar</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          >
            Proyek Lainnya
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/portfolio/${relatedProject.id}`}>
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={relatedProject.mainImage}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm mb-2">{relatedProject.category}</p>
                        <h3 className="text-xl font-semibold">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik dengan Proyek Ini?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Mari diskusikan bagaimana kami dapat mewujudkan proyek impian Anda
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Konsultasi Gratis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
