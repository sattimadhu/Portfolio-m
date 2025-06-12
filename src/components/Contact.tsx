import React from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact: FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 backdrop-blur-sm max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
          <p className="text-gray-400 mb-8 text-center">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400">
                <FiMail className="text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <Link
                  to="mailto:madhusatti2007@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  madhusatti2007@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400">
                <FiLinkedin className="text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/madhu2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  linkedin.com/in/madhu2007
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400">
                <FiGithub className="text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a
                  href="https://github.com/sattimadhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  github.com/sattimadhu
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;