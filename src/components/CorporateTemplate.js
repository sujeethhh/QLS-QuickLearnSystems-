"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SendMessageForm from "@/components/SendMessage";



export default function CorporateTemplate({ courseData }) {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1 } }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: slideTransition }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1.2 } }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${courseData.backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={slideInLeftVariants} className="text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {courseData.title}
            </motion.h1>
            <motion.p variants={fadeInVariants} className="text-xl text-white/80 max-w-3xl"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {courseData.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      

      {/* MAIN CONTENT */}
      <section className="bg-white py-14">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
          
          {/* LEFT */}
          <div className="lg:col-span-8">
            <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible">
              <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Course Overview
              </motion.h2>

              {courseData.overview.map((p, i) => (
                <motion.p key={i} variants={paragraphVariants} className="mb-5 text-gray-700"
                style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" className="sticky top-24">
              <motion.img
                src="/corporate.jpg"
                className="rounded-xl shadow-lg"
                whileHover={{ scale: 1.03 }}
              />
              <Link href="/Events">
                <motion.button
                  className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Check Schedule
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED COURSES */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Popular Corporate Training Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"
               style={{ fontFamily: "'Inter', sans-serif" }}>
              Enhance your team's skills with our most sought-after certification programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 - ITIL Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/ITIL-Foundation.png"
                  alt="ITIL 4 Foundation"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Foundation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  ITIL® 4 Foundation
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Master the fundamentals of IT Service Management with ITIL® 4 Foundation certification.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>3 Days</span>
                  <span>2.5K+ Students</span>
                </div>
                <Link href="/ITL4Management">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Course 2 - PMP Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/PMPC.jpg"
                  alt="PMP Certification"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Professional
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  PMP Certification
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Project Management Professional certification for experienced project managers.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>4 Days</span>
                  <span>3.2K+ Students</span>
                </div>
                <Link href="/PMP">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Course 3 - Leading SAFe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/SAFe.jpg"
                  alt="Leading SAFe Agilist"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Professional
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  Leading SAFe Agilist
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Scale Agile practices across enterprise with SAFe framework.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>2 Days</span>
                  <span>2.8K+ Students</span>
                </div>
                <Link href="/LeadingSAFeAgilist">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Course 4 - Scrum Master */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/sm1.jpg"
                  alt="Professional Scrum Master"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Professional
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  Professional Scrum Master I
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Master Scrum framework and become an effective Scrum Master.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>2 Days</span>
                  <span>4.1K+ Students</span>
                </div>
                <Link href="/PScrumM1">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Course 5 - Six Sigma Green Belt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/green_belt.png"
                  alt="Lean Six Sigma Green Belt"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Professional
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  Lean Six Sigma Green Belt
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Process improvement and quality management with Six Sigma methodology.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>4 Days</span>
                  <span>1.9K+ Students</span>
                </div>
                <Link href="/LeanSSGB">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Course 6 - ISTQB Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/ISTQB.jpg"
                  alt="ISTQB Foundation Level"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9F2D2D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Foundation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  ISTQB Foundation Level
                </h3>
                <p className="text-gray-600 text-sm mb-4"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  Software testing fundamentals and ISTQB certification.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>3 Days</span>
                  <span>2.7K+ Students</span>
                </div>
                <Link href="/ISTQBF">
                  <motion.button
                    className="w-full bg-[#9F2D2D] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* View All Courses Button */}
          
         
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
          
          <div className="lg:col-span-8">
            {[
              ["WHY YOU SHOULD CHOOSE QuickLearn Systems?", courseData.WhyQls],
              ["TRAINING DELIVERY METHODS", courseData.DeliveryMethods],
              ["COURSE CATALOG", courseData.Catalog],
              ["OPEN/PUBLIC TRAINING PROGRAMS", courseData.TrainingPrograms],
              ["E-LEARNING :", courseData.eLearning]
              
            ].map(([title, list], idx) => (
              <motion.div key={idx} variants={staggerTextVariants} initial="hidden" whileInView="visible">
                <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </motion.h2>
                <ul className="space-y-3 mb-10">
                  {list.map((item, i) => (
                    <motion.li key={i} variants={wordSlideVariants} className="flex gap-3">
                      <span className="w-2 h-2 bg-slate-700 rounded-full mt-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" className="sticky top-24">
              <img src="/team.jpg" className="rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
      <section
      style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <SendMessageForm />
      </section>
    </>
  );
}
