import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    description: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_3d5bhy6", // Replace with your service ID
          "template_ve0h2nq", // Replace with your template ID
          formRef.current,
          "7PX7vNnZZJxDVn4_i" // Replace with your user ID
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          toast.success(
            "Successfully submitted 😊. Zuntly team will reach you soon!"
          );
          // Optionally, you can reset the form here
          setForm({
            name: "",
            mobile: "",
            email: "",
            description: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Error submitting the form. Please try again.");
        });
    }
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-600 text-white py-16 px-8 lg:px-16 xl:px-24 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Information */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold mb-4 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-blue-400" />
              <p className="text-lg">9701930268</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p className="text-lg">bhanugamasu9@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p className="text-lg text-left">
                Indra Meadows, Madhapur, Hyderabad
              </p>
            </div>
            <div className="flex items-center gap-3">
              <GlobeAltIcon className="h-6 w-6 text-blue-400" />
              <p className="text-lg">www.zuntly.com</p>
            </div>
          </div>
        </div>

        {/* Request Call Back Form */}
        <div className="flex-1">
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">
              Request a Call Back
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                autoComplete="off"
                className="p-2 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                autoComplete="off"
                className="p-2 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="off"
                className="p-2 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                autoComplete="off"
                className="p-2 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Follow Us
          </motion.h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="2.5rem"
                height="2.5rem"
                color="#60a5fa"
              >
                {" "}
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2.5rem"
                height="2.5rem"
              >
                <path d="M 17.214844 2.9863281 A 1.250125 1.250125 0 0 0 16.277344 3.4648438 L 12.351562 8.3339844 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.1855469 12.257812 L 3.7773438 18.964844 A 1.250125 1.250125 0 1 0 5.7226562 20.535156 L 10.703125 14.359375 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 14.785156 11.771484 L 20.222656 5.0351562 A 1.250125 1.250125 0 0 0 18.277344 3.4648438 L 13.296875 9.640625 L 9.0566406 3.7714844 L 12.351562 8.3339844 L 16.277344 3.4648438 A 1.250125 1.250125 0 0 0 17.214844 2.9863281 z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="3rem"
                height="3rem"
              >
                <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="2.5rem"
                height="2.5rem"
                color="#60a5fa"
              >
                {" "}
                <path d="M 17 3 C 8.715 3 3 8.715 3 17 L 3 33 C 3 41.285 8.715 47 17 47 L 33 47 C 41.285 47 47 41.285 47 33 L 47 17 C 47 8.715 41.285 3 33 3 L 17 3 z M 17 5 L 33 5 C 40.105 5 45 9.895 45 17 L 45 33 C 45 40.105 40.105 45 33 45 L 17 45 C 9.895 45 5 40.105 5 33 L 5 17 C 5 9.895 9.895 5 17 5 z M 35.5 10 C 34.672 10 34 10.672 34 11.5 C 34 12.328 34.672 13 35.5 13 C 36.328 13 37 12.328 37 11.5 C 37 10.672 36.328 10 35.5 10 z M 25 14 C 19.477 14 15 18.477 15 24 C 15 29.523 19.477 34 25 34 C 30.523 34 35 29.523 35 24 C 35 18.477 30.523 14 25 14 z M 25 16 C 29.43 16 33 19.57 33 24 C 33 28.43 29.43 32 25 32 C 20.57 32 17 28.43 17 24 C 17 19.57 20.57 16 25 16 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
