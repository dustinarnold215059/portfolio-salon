import { motion } from 'framer-motion';
import { SparklesIcon, GiftIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Offers = () => {
  const offers = [
    {
      icon: GiftIcon,
      title: 'First Visit Special',
      discount: '20% Off',
      description: 'Any Service',
      details: 'New clients receive 20% off their first service. Valid for all services except bridal packages.',
      badge: 'Most Popular',
    },
    {
      icon: UserGroupIcon,
      title: 'Referral Program',
      discount: '$25 Credit',
      description: 'Both You & Friend',
      details: 'Refer a friend and you both get $25 off your next visit. Unlimited referrals!',
    },
    {
      icon: SparklesIcon,
      title: 'Loyalty Rewards',
      discount: 'Earn Points',
      description: 'Every Visit',
      details: 'Join our VIP program. Earn 1 point per $1 spent. Redeem 100 points for $10 off.',
    },
  ];

  return (
    <section id="offers" className="py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Special Offers & Rewards
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take advantage of our exclusive promotions and loyalty programs
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Badge */}
              {offer.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {offer.badge}
                  </span>
                </div>
              )}

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 text-center h-full hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <offer.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>

                {/* Discount */}
                <div className="text-4xl font-bold text-gradient mb-2">{offer.discount}</div>
                <div className="text-lg text-gray-600 mb-4">{offer.description}</div>

                {/* Details */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{offer.details}</p>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Claim Offer
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our VIP Club Today
            </h3>
            <p className="text-white/90 mb-6">
              Get exclusive access to members-only promotions, early booking privileges, and birthday surprises. Sign up is free and instant!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <SparklesIcon className="h-6 w-6" />
              Become a VIP Member
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
