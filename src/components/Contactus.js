"use client";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Upload, User, MessageSquare, Building, Calendar } from "lucide-react";
import ScrollFloat from "@/components/ui/ScroolReveal";
import { useState } from "react";
export default function Contactus() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    courseInterested: '',
    inquiryType: '',
    preferredContact: '',
    bestTimeToContact: '',
    message: '',
    newsletter: false,
    file: null
  });

  const [focusedField, setFocusedField] = useState('');

  // Same animation variants as Hero component
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
    exit: { opacity: 0, x: 100 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
    exit: { opacity: 0, y: -40 }
  };

  const staggerFormVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Headers />

      {/* Hero Section - Same style as Hero component */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        {/* Background with same animations as Hero */}
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/AboutUs1.jpg')` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-gray-900 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="max-w-4xl text-white"
              >
                {/* Title */}
                <motion.h1
                  variants={slideInLeftVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    Contact Us
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInVariants}
                  className="text-lg md:text-xl lg:text-2xl leading-[1.6] mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Get in touch with our expert team for personalized training solutions.
                </motion.p>


              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center mb-12"
            textClassName="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] bg-gradient-to-r from-slate-700 via-gray-800 to-stone-900 bg-clip-text text-transparent drop-shadow-lg"
          >
            Get In Touch
          </ScrollFloat>

          {/* Contact Info Cards */}
          
          
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=" bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Side - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerFormVariants}
              className="lg:col-span-7 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-8">
                <motion.h2
                  variants={formFieldVariants}
                  className="text-3xl font-bold mb-2"
                >
                  Send Us a Message
                </motion.h2>
                <motion.p
                  variants={formFieldVariants}
                  className="text-slate-200"
                >
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </motion.p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Personal Information */}
                <motion.div variants={formFieldVariants}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Full Name *"
                        required
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'fullName' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Email Address *"
                        required
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div variants={formFieldVariants}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Phone Number *"
                        required
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'phone' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Company Name"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'company' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Course & Inquiry Information */}
                <motion.div variants={formFieldVariants}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Inquiry Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                      name="courseInterested"
                      value={formData.courseInterested}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Course Interested In</option>
                      <option value="itil-foundation">ITIL® 4 Foundation</option>
                      <option value="pmp">PMP Certification</option>
                      <option value="prince2">PRINCE2</option>
                      <option value="safe-agilist">SAFe Agilist</option>
                      <option value="scrum-master">Scrum Master</option>
                      <option value="six-sigma">Six Sigma</option>
                      <option value="devops">DevOps</option>
                      <option value="business-analysis">Business Analysis</option>
                      <option value="other">Other</option>
                    </select>

                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Inquiry Type</option>
                      <option value="general">General Inquiry</option>
                      <option value="course-details">Course Details</option>
                      <option value="corporate-training">Corporate Training</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </motion.div>

                {/* Contact Preferences */}
                <motion.div variants={formFieldVariants}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Contact Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Preferred Contact Method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both Email & Phone</option>
                    </select>

                    <select
                      name="bestTimeToContact"
                      value={formData.bestTimeToContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Best Time to Contact</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={formFieldVariants}>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                      placeholder="Your Message / Remarks *"
                      required
                    ></textarea>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-700"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* File Upload */}


                {/* Newsletter & Privacy */}
                <motion.div variants={formFieldVariants} className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-slate-600 border-slate-300 rounded focus:ring-slate-500"
                    />
                    <span className="text-slate-1000">Subscribe to our newsletter for updates and course announcements</span>
                  </label>

                  <p className="text-sm text-slate-500">
                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.
                  </p>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formFieldVariants} className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-slate-700 to-gray-800 text-white py-4 px-8 rounded-lg font-semibold hover:from-slate-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Professional Image & Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerFormVariants}
              className="lg:col-span-5 space-y-8"
            >
              {/* Professional Image Section */}
              <motion.div
                variants={formFieldVariants}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Background decorative elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-slate-600/20 via-gray-600/20 to-stone-600/20 rounded-2xl blur-xl scale-110"
                    animate={{
                      scale: [1.1, 1.2, 1.1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <motion.img
                    src="/team.jpg"
                    alt="Professional Training Team"
                    className="relative z-10 w-full h-80 object-cover rounded-2xl border-4 border-white/60 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  />

                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      y: [-5, 5, -5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-gray-600 to-slate-700 rounded-full shadow-lg opacity-90 flex items-center justify-center"
                    animate={{
                      y: [5, -5, 5],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Professional badge overlay */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 border border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">24/7</div>
                    <div className="text-xs text-slate-600 font-medium">Expert Support</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div
                variants={formFieldVariants}
                className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-slate-600" />
                  Why Choose QuickLearn?
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: "🎯", title: "Expert Trainers", desc: "Industry-certified professionals with real-world experience" },
                    { icon: "⚡", title: "Fast Response", desc: "We respond to all inquiries within 24 hours" },
                    { icon: "🏆", title: "Proven Results", desc: "95% success rate with thousands of certified professionals" },
                    { icon: "🌐", title: "Global Reach", desc: "Training delivered worldwide with local support" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Contact Card */}
              <motion.div
                variants={formFieldVariants}
                className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl p-8 text-white shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-slate-200 mb-6">
                  Our training consultants are available to help you choose the right course for your career goals.
                </p>

                <div className="space-y-3">
                  <motion.a
                    href="tel:+111564568225"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+111 (564) 568 25</span>
                  </motion.a>

                  <motion.a
                    href="mailto:info@quicklearn.com"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@quicklearn.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
