import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (
        documentHeight > viewportHeight &&
        scrollPosition > viewportHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 bg-blue-600 dark:bg-blue-800 p-4 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          onClick={scrollToTop}
        >
          <ChevronDoubleUpIcon className="h-6 w-6 text-white" />
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTopButton;
