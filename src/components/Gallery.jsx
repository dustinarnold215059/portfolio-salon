import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      title: 'Balayage Transformation',
      category: 'Hair Color'
    },
    {
      url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
      title: 'Bridal Updo',
      category: 'Bridal'
    },
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
      title: 'Precision Cut',
      category: 'Haircut'
    },
    {
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
      title: 'Makeup Artistry',
      category: 'Makeup'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      title: 'Elegant Styling',
      category: 'Styling'
    },
    {
      url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
      title: 'Nail Art',
      category: 'Nails'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Beautiful Work</h2>
          <p className="section-subtitle">
            Explore stunning transformations and creative artistry from our talented team
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-400 text-sm font-semibold mb-1">{image.category}</span>
                <h3 className="text-white text-lg font-bold">{image.title}</h3>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-gray-900">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <span className="text-primary-400 text-sm font-semibold">{selectedImage.category}</span>
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
