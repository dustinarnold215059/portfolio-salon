import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Team = () => {
  const stylists = [
    {
      name: 'Isabella Rodriguez',
      specialty: 'Master Colorist & Hair Designer',
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
      description: 'Specializes in balayage, color corrections, and editorial styling.',
    },
    {
      name: 'Sophia Chen',
      specialty: 'Bridal & Special Events Specialist',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
      description: 'Expert in updos, vintage styles, and makeup artistry.',
    },
    {
      name: 'Emma Laurent',
      specialty: 'Cutting & Extension Expert',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      description: 'Master of precision cuts, keratin treatments, and extensions.',
    },
    {
      name: 'Olivia Martinez',
      specialty: 'Nail Artist & Spa Specialist',
      experience: '7 years',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
      description: 'Creates stunning nail art and provides luxurious spa treatments.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Meet Our Expert Stylists</h2>
          <p className="section-subtitle">
            Award-winning professionals dedicated to making you look and feel your absolute best
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stylists.map((stylist, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card overflow-hidden">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-4 w-4 text-gold-500" />
                      <span className="text-sm font-bold text-gray-900">{stylist.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stylist.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{stylist.specialty}</p>
                  <p className="text-gray-600 text-sm">{stylist.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Book with your favorite stylist or let us match you with the perfect expert for your needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Schedule Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
