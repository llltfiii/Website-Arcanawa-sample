import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Category = 'all' | 'residential' | 'commercial' | 'interior' | 'public';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'Semua Proyek' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'interior', label: 'Interior' },
    { value: 'public', label: 'Public Building' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Portfolio Kami
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Koleksi proyek arsitektur yang telah kami wujudkan
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-muted/50 text-foreground hover:bg-muted'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/portfolio/${project.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-72 overflow-hidden">
                        <ImageWithFallback
                          src={project.mainImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-sm tracking-wider mb-2">
                            {project.location} • {project.year}
                          </p>
                          <p className="text-sm text-white/80">
                            Lihat Detail →
                          </p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {categories.find((cat) => cat.value === project.category)
                              ?.label || project.category}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {project.area}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-muted-foreground">
                Belum ada proyek dalam kategori ini
              </p>
            </motion.div>
          )}
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
              Tertarik dengan Portfolio Kami?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Mari diskusikan proyek Anda dan wujudkan desain arsitektur yang
              menginspirasi
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
