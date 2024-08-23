import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const developers = [
  {
    name: "Pavan Kalyan",
    title: "Mobile App Developer",
    description:
      "Skilled in Node.js, Express, MongoDB and Mobile app architecture.",
    image: require("../../src/profile.png"),
  },
  {
    name: "Prem Kumar",
    title: "Full Stack Developer",
    description: "Specialist in React, Nest Js, Node.js, Express, and MongoDB.",
    image: require("../../src/profile.png"),
  },
  {
    name: "Bhanu Prakash",
    title: "Full Stack Developer",
    description:
      "Expert in React, React Native, Mobile app architecture, Node Js and Express.",
    image: require("../../src/profile.png"),
  },
];

const projects = [
  {
    title: "Bigulu",
    description:
      "Bigulu is your go-to platform for discovering and connecting with like-minded individuals for all your favorite activities. A sleek, cross-platform PWA built with Ionic, NodeJS, and MongoDB provides a seamless and interactive experience.",
    url: "https://bigulu.com",
  },
  {
    title: "Kickday",
    description:
      "Kickday is the ultimate platform for homemakers to showcase their culinary creations. List dishes on the Maker’s Portal and let customers browse, order, and pre-order meals effortlessly. A sleek, cross-platform PWA using Ionic, NodeJS.",
    url: "https://kickday.com",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <motion.div
        className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${require("../../src/Background.jpg")})`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-2xl p-8 bg-gray-600 rounded-lg dark:bg-gray-800"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4 dark:text-gray-200">
            Empowering Your Digital Vision with Zuntly
          </h1>
          <p className="text-lg text-white dark:text-gray-300">
            At Zuntly, we don’t just build e-commerce platforms—we create
            extraordinary digital experiences. Our talented team specializes in
            crafting dynamic solutions across food, education, portfolios and
            many mobile apps based on the clients requirement. Transform your
            vision into reality with our innovative and scalable expertise.
          </p>
        </motion.div>
      </motion.div>

      {/* Our Services Section */}
      <div
        id="our-services"
        className="py-16 px-8 bg-gray-50 dark:bg-gray-900 w-full"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "E-Commerce Development",
              description:
                "Create a robust online store with our e-commerce solutions designed to deliver a seamless shopping experience.",
              icon: "🛒",
            },
            {
              title: "Custom Web Development",
              description:
                "Build bespoke web applications tailored to your specific business needs, with a focus on performance and scalability.",
              icon: "💻",
            },
            {
              title: "Mobile App Development",
              description:
                "Reach your audience on the go with our high-performance mobile apps for iOS and Android.",
              icon: "📱",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="max-w-sm p-8 bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="flex items-center justify-center text-5xl mb-4">
                <span className="text-blue-500 dark:text-blue-400">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        id="why-choose-us"
        className="py-16 px-8 bg-white dark:bg-gray-800 w-full"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Expertise & Experience",
              text: "Our team consists of seasoned professionals with years of experience in delivering top-notch digital solutions.",
              icon: "💼",
            },
            {
              title: "Client-Centric Approach",
              text: "We prioritize your needs and tailor our services to ensure your success. Your satisfaction is our top priority.",
              icon: "🤝",
            },
            {
              title: "Innovation & Quality",
              text: "We are committed to innovation, delivering cutting-edge solutions without compromising on quality.",
              icon: "🚀",
            },
          ].map((reason, index) => (
            <motion.div
              key={reason.title}
              className="max-w-md p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
            >
              <span className="text-5xl mb-4 text-blue-500 dark:text-blue-400">
                {reason.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="py-16 px-8 bg-gray-50 dark:bg-gray-900 w-full"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              text: "Zuntly transformed our digital presence with their expert e-commerce solutions. Their team is highly professional and dedicated.",
              author: "Sravani Bodempudi, CEO of Lovely Chocos",
            },
            {
              text: "Working with Zuntly was a fantastic experience. They understood our needs and delivered a mobile app that exceeded our expectations.",
              author: "Satya Vasireddy, Founder of Bigulu",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="max-w-lg p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg shadow-2xl transform transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.4 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {testimonial.text}
              </p>
              {/* Author */}
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-right">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Developer Profiles Section */}
      <div
        id="developer-profiles"
        className="py-16 px-8 bg-gray-50 dark:bg-gray-900 w-full"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {developers.map((dev) => (
            <motion.div
              key={dev.name}
              className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src={dev.image}
                  alt={dev.name}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {dev.name}
              </h3>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                {dev.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {dev.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Previous Projects Section */}
      <div
        id="previous-projects"
        className="py-16 px-8 bg-white dark:bg-gray-800 w-full"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Our Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="max-w-md bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="relative mb-4 flex justify-center">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ width: "380px", height: "700px" }}
                >
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="w-full h-full border-4 border-black dark:border-blue-200"
                    style={{ borderRadius: "20px", transform: "scale(0.74)" }}
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Home;
