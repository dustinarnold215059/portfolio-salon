import { motion } from 'framer-motion';
import {
  ScissorsIcon,
  SparklesIcon,
  BeakerIcon,
  HandThumbUpIcon,
  PaintBrushIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: ScissorsIcon,
      title: 'Haircuts & Styling',
      description: 'Precision cuts and styling tailored to your unique features and lifestyle.',
      price: '$45 - $85',
      features: ['Consultation', 'Wash & Style', 'Blow Dry']
    },
    {
      icon: PaintBrushIcon,
      title: 'Hair Coloring',
      description: 'From subtle highlights to bold transformations with premium color products.',
      price: '$95 - $175',
      features: ['Color Match', 'Full/Partial', 'Toning']
    },
    {
      icon: BeakerIcon,
      title: 'Treatments & Extensions',
      description: 'Deep conditioning, keratin treatments, and premium hair extensions.',
      price: '$75 - $250',
      features: ['Keratin', 'Extensions', 'Repair']
    },
    {
      icon: SparklesIcon,
      title: 'Nails & Spa Services',
      description: 'Luxurious manicures, pedicures, and relaxing spa treatments.',
      price: '$35 - $95',
      features: ['Manicure', 'Pedicure', 'Gel Polish']
    },
    {
      icon: HandThumbUpIcon,
      title: 'Makeup Services',
      description: 'Professional makeup application for any occasion or special event.',
      price: '$65 - $125',
      features: ['Day Makeup', 'Evening', 'Special Events']
    },
    {
      icon: HeartIcon,
      title: 'Bridal Packages',
      description: 'Complete bridal beauty packages for your special day.',
      price: 'Custom',
      features: ['Trial Session', 'Day-Of', 'Bridal Party']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services & Pricing</h2>
          <p className="section-subtitle">
            Premium beauty services delivered by expert stylists using top-quality products
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-gradient mb-4">{service.price}</div>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 w-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
