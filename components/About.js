import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">VRAJ LAKUM</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm a passionate web developer currently studying Information and Technology at Silver Oak University. With a
          keen interest in creating innovative and user-friendly web applications, I'm constantly expanding my skills
          and knowledge in the ever-evolving world of web development.
        </p>
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Skills</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
          <li>HTML5, CSS3, JavaScript</li>
          <li>React.js, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, SQL</li>
          <li>Git, GitHub</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design Principles</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300">
          I'm always eager to learn new technologies and methodologies to improve my craft and deliver exceptional web
          experiences. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more
          about my work!
        </p>
      </motion.div>
    </div>
  )
}

