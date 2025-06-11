import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
  {
    name: "Chat with PDF",
    year: "2025",
    desc: "A chatbot interface that allows users to upload PDFs and interact with their content using natural language queries powered by embeddings and LLMs.",
    tags: ["Python", "LangChain", "DeepSeek", "Streamlit", "PDF", "LLM"],
    github: "#",
    live: "#",
  },
  {
    name: "Accident Detection & Alert System",
    year: "2025",
    desc: "An AI-powered IoT system that detects vehicle accidents using MPU6050 and sends real-time alerts via Twilio and Firebase.",
    tags: ["ESP8266", "MPU6050", "Firebase", "Twilio", "Python", "ML"],
    github: "#",
    live: "#",
  },
  {
  name: "Portfolio Website",
  year: "2025",
  desc: "A modern personal portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations, responsive design, and project showcase.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  github: "#",
  live: "#",
},
  {
    name: "AI Greenhouse Automation",
    year: "2025",
    desc: "Smart climate control system for crops using AI, sensors, and IoT to optimize environmental conditions inside greenhouses.",
    tags: ["ESP8266", "Raspberry Pi Pico W", "Python", "ML", "IoT", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    name: "Lead Scoring Tool",
    year: "2025",
    desc: "Machine learning model to score and rank leads based on company data, revenue, and other business metrics.",
    tags: ["Python", "scikit-learn", "RandomForest", "MySQL","Streamlit"],
    github: "#",
    live: "#",
  },
  {
    name: "Marker Based AR App",
    year: "2025",
    desc: "AR app using Unity and AR Foundation to display videos on image targets of the 7 Wonders of the World, one at a time.",
    tags: ["Unity", "AR Foundation", "C#", "Video Player", "Image Tracking"],
    github: "#",
    live: "#",
  },
  {
    name: "Image Color Extractor",
    year: "2024",
    desc: "A web application that extracts dominant colors from uploaded images using k-means clustering, useful for design and branding.",
    tags: ["Python", "Flask", "OpenCV", "K-Means", "Color Picker", "HTML","CSS","JavaScript"],
    github: "#",
    live: "#",
  },
  {
    name: "Fake News Detector",
    year: "2023",
    desc: "A machine learning application that classifies news headlines or articles as real or fake using NLP techniques and a trained classifier.",
    tags: ["Python", "NLP", "sklearn", "TF-IDF", "Flask", "Fake News","Spacy"],
    github: "#",
    live: "#",
  }
];


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
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 text-white bg-gray-900/50"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-4 md:mb-0"
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>
          {/* Changed to Link if this is an internal route, kept as anchor if it's a file download */}
          <motion.a
            variants={fadeIn}
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-blue-400">{project.year}</p>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-1"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-1"
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;