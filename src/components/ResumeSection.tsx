import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResumeSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
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
          My <span className="text-blue-400">Resume</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experience */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400 mr-4">
                <FaBriefcase className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="pl-16">
  {/* <div className="relative pl-6 pb-6 border-l border-gray-700 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:left-0 before:top-1.5 before:transform before:-translate-x-1/2">
    <h4 className="font-medium text-lg">AI/ML Developer Intern</h4>
    <p className="text-sm text-gray-300">Yubhian Technologies</p>
    <p className="text-sm text-blue-400">2025 – Present</p>
    <p className="text-gray-400 mt-2">
      Building intelligent systems and maintaining web applications using modern AI/ML technologies, including model integration and data-driven feature development.
    </p>
  </div> */}
  <div className="relative pl-6 pb-6 border-l border-gray-700 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:left-0 before:top-1.5 before:transform before:-translate-x-1/2">
    <h4 className="font-medium text-lg">Freelancer</h4>
    <p className="text-sm text-gray-300">Self Employeed</p>
    <p className="text-sm text-blue-400">2024 – Present</p>
    <p className="text-gray-400 mt-2">
      Worked on diverse client projects involving AI/ML solutions, automation, and custom tool development tailored to specific business needs.
    </p>
  </div>
</div>

          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400 mr-4">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="pl-16">
  <div className="relative pl-6 pb-6 border-l border-gray-700 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:left-0 before:top-1.5 before:transform before:-translate-x-1/2">
    <h4 className="font-medium text-lg">B.Tech in Electronics and Communication Engineering</h4>
    <p className="text-sm text-gray-300">Sri Vasavi Engineering College</p>
    <p className="text-sm text-blue-400">2022 – 2026</p>
    <p className="text-gray-400 mt-2">
      Pursuing a Bachelor's in Electronics with a focus on IoT, embedded systems, AI, and software development.
    </p>
  </div>
  <div className="relative pl-6 border-l border-gray-700 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:left-0 before:top-1.5 before:transform before:-translate-x-1/2">
    <h4 className="font-medium text-lg">Higher Secondary Education (Intermediate)</h4>
    <p className="text-sm text-gray-300">Sasi Junior College</p>
    <p className="text-sm text-blue-400">2020 – 2022</p>
    <p className="text-gray-400 mt-2">
      Specialized in Mathematics, Physics, and Chemistry.
    </p>
  </div>
</div>

          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-900/30 text-blue-400 mr-4">
                <FaCode className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>
            <div className="pl-16">
              <h4 className="font-medium mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "C++ STL",
                  "DSA",
                  "Scikit-Learn",
                  "TensorFlow",
                  "PyTorch",
                  "Seaborn",
                  "Pandas",
                  "NumPy",
                  "Mongodb",
                  "MySQL",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Bootstrap",
                  "React",
                  "Node.js",
                  "Flask",
                  "Django",
                  "TypeScript",
                  "Tailwind CSS",
                  "Firebase",
                  "Git",
                  "Linux - Ubuntu",
                ].map((skill) => (
                  <Link
                    key={skill}
                    to={`/skills/${skill.toLowerCase()}`}
                    className="px-3 py-1 text-sm rounded-full bg-purple-900/30 text-blue-300 hover:bg-blue-800 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
              <h4 className="font-medium mt-4 mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Telugu"].map((lang) => (
                  <Link
                    key={lang}
                    to={`/languages/${lang.toLowerCase()}`}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors duration-300"
                  >
                    {lang}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;