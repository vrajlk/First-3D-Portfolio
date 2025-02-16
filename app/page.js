"use client"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "@/components/Layout"
import LandingPage from "@/components/LandingPage"
import Dashboard from "@/components/Dashboard"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

