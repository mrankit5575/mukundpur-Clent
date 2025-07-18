'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const socialLinks = [
    { icon: <FiFacebook />, href: "#", name: "Facebook" },
    { icon: <FiTwitter />, href: "#", name: "Twitter" },
    { icon: <FiInstagram />, href: "#", name: "Instagram" },
    { icon: <FiLinkedin />, href: "#", name: "LinkedIn" },
    { icon: <FiYoutube />, href: "#", name: "YouTube" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Study Materials", href: "/materials" },
    { name: "Contact", href: "/contact" }
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Cookie Policy", href: "/cookies" }
  ]

  return (
    <footer className="bg-[#0c0950] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              EduConnect
            </h2>
            <p className="text-blue-100">
              India's premier online education platform connecting students with top educators across the country.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="text-blue-300" />
                <span className="text-blue-100">contact@educonnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-blue-300" />
                <span className="text-blue-100">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-blue-300 mt-1" />
                <span className="text-blue-100">
                  123 Education Street, Learning District, Bangalore 560001
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-blue-100">
              Subscribe to get updates on new courses and study materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-blue-200 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-blue-200 text-center md:text-right">
            &copy; {new Date().getFullYear()} EduConnect. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer