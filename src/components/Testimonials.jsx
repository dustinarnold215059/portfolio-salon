import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Thompson',
      service: 'Balayage & Styling',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'Absolutely stunning results! Isabella transformed my hair with the most beautiful balayage. The salon is luxurious and the service is impeccable. I always leave feeling like a million dollars!',
      date: '2 weeks ago'
    },
    {
      name: 'Sarah Martinez',
      service: 'Bridal Package',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'Sophia made my wedding day perfect! From the trial to the big day, every detail was flawless. My hair and makeup stayed perfect all day and night. Cannot recommend enough!',
      date: '1 month ago'
    },
    {
      name: 'Amanda Chen',
      service: 'Haircut & Color',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
      rating: 5,
      text: 'Best salon experience ever! The stylists really listen to what you want and deliver beyond expectations. The atmosphere is so relaxing and elegant. This is now my go-to beauty destination!',
      date: '3 weeks ago'
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our delighted clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-primary-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-gold-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Service */}
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.service}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-600 font-medium">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">10+</div>
            <div className="text-gray-600 font-medium">Industry Awards</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
