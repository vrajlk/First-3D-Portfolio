import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-platform-demo.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app using OpenWeatherMap API and React.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-dashboard-demo.vercel.app",
    },
    {
      title: "Task Manager",
      description: "A MERN stack application for managing daily tasks and projects.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.vercel.app",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

