'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Reusable animated section component
const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

// Smooth scroll function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  if (targetId) {
    const element = document.querySelector(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  const toggleCourse = (courseTitle: string) => {
    setExpandedCourse(expandedCourse === courseTitle ? null : courseTitle);
  };

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onClick={scrollToSection} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
              <a href="#skills" onClick={scrollToSection} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</a>
              <a href="#projects" onClick={scrollToSection} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I'm{" "}
              <span className="inline-flex relative">
                {"Dominik".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
                    animate={{
                      y: [0, -10, 0],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      y: {
                        duration: 0.9,
                        repeat: 1,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      },
                      backgroundPosition: {
                        duration: 2,
                        repeat: 1,
                        ease: "linear",
                      },
                    }}
                    onAnimationComplete={() => {
                      // Remove gradient after animation completes
                      const element = document.querySelector(`[data-char="${index}"]`);
                      if (element) {
                        element.classList.remove('bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-blue-600', 'via-blue-400', 'to-blue-600');
                        element.classList.add('text-blue-600', 'dark:text-blue-400');
                      }
                    }}
                    data-char={index}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="mx-2"></span>
                {"Kasza".split("").map((char, index) => (
                  <motion.span
                    key={index + "Kasza"}
                    className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
                    animate={{
                      y: [0, -10, 0],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      y: {
                        duration: 0.9,
                        repeat: 1,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      },
                      backgroundPosition: {
                        duration: 2,
                        repeat: 1,
                        ease: "linear",
                      },
                    }}
                    onAnimationComplete={() => {
                      // Remove gradient after animation completes
                      const element = document.querySelector(`[data-char="${index + "Kasza"}"]`);
                      if (element) {
                        element.classList.remove('bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-blue-600', 'via-blue-400', 'to-blue-600');
                        element.classList.add('text-blue-600', 'dark:text-blue-400');
                      }
                    }}
                    data-char={index + "Kasza"}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A passionate developer crafting beautiful and functional web experiences
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex justify-center gap-6"
            >
              <a 
                href="#education" 
                onClick={scrollToSection} 
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">
                  Education
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#projects" 
                onClick={scrollToSection} 
                className="group relative px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
              >
                <span className="relative z-10">
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gray-50 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate developer with a keen eye for design and a love for creating
                seamless user experiences. With several years of experience in web development,
                I specialize in building modern, responsive, and accessible websites.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My journey in tech has been driven by a constant desire to learn and improve,
                always staying up-to-date with the latest technologies and best practices.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 md:h-96"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about-me/portrait.jpg"
                  alt="Dominik Kasza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "React",
                description: "Proficient in building modern, responsive web applications using React.js. Experienced with hooks, context, and state management.",
                level: "Advanced"
              },
              {
                name: "Next.js",
                description: "Skilled in server-side rendering, static site generation, and API routes. Built multiple production applications using Next.js.",
                level: "Advanced"
              },
              {
                name: "TypeScript",
                description: "Strong understanding of type systems and TypeScript best practices. Implemented type-safe applications and libraries.",
                level: "Intermediate"
              },
              {
                name: "Tailwind CSS",
                description: "Expert in utility-first CSS and responsive design. Created custom components and maintained consistent design systems.",
                level: "Advanced"
              },
              {
                name: "Node.js",
                description: "Experience in building scalable backend services and APIs. Knowledge of Express.js and RESTful architecture.",
                level: "Intermediate"
              },
              {
                name: "Python",
                description: "Proficient in Python programming, data analysis, and automation. Experience with popular frameworks and libraries.",
                level: "Intermediate"
              },
              {
                name: "SQL",
                description: "Strong database design and query optimization skills. Experience with PostgreSQL, MySQL, and database management.",
                level: "Advanced"
              },
              {
                name: "Git",
                description: "Expert in version control, branching strategies, and collaborative development workflows. Regular contributor to open-source projects.",
                level: "Advanced"
              },
              {
                name: "Java",
                description: "Proficient in Java programming with experience in object-oriented design, Spring framework, and enterprise applications.",
                level: "Advanced"
              },
              {
                name: "JavaScript",
                description: "Strong foundation in JavaScript fundamentals, ES6+ features, and modern web development practices.",
                level: "Advanced"
              },
              {
                name: "C++",
                description: "Experience with C++ programming, memory management, and system-level development.",
                level: "Intermediate"
              },
              {
                name: "C#",
                description: "Skilled in C# development, .NET framework, and Windows application development.",
                level: "Intermediate"
              }
            ].map((skill, index) => (
              <div key={skill.name} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => toggleSkill(skill.name)}
                  className={`group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 ${
                    expandedSkill === skill.name ? 'ring-2 ring-blue-500 dark:ring-blue-400 bg-blue-50 dark:bg-gray-700' : ''
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <motion.svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedSkill === skill.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>
                    <AnimatePresence>
                      {expandedSkill === skill.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-4"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {skill.description}
                          </p>
                          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            {skill.level}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Task Management App",
                description: "A collaborative task management application with AI authentication, notifications, and a live feed.",
                image: "/projects/lockdin.jpg",
                tech: ["Next.js", "OpenAI", "Tailwind CSS", "Supabase", "Discord Bot"],
                demoLink: "https://lockdin-nine.vercel.app/",
                githubLink: "https://github.com/Guciosk/Lockdin"
              },
              {
                title: "Heart Disease Prediction App",
                description: "A Machine Learning model that predicts the likelihood of heart disease based on a user's input.",
                image: "/projects/Hearts.png",
                tech: ["Java", "JavaFX", "Java Swing"],
                demoLink: "https://github.com/Guciosk/Hearts/tree/main/Hearts",
                githubLink: "https://github.com/Guciosk/Hearts/tree/main/Hearts"
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing projects and skills with an emphasis on organization and ease of use.",
                image: "/projects/portfolio-website.jpg",
                tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Cursor", "Vercel"],
                demoLink: "#",
                githubLink: "https://github.com/Guciosk/Personal-Portfolio"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.demoLink}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center group"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.githubLink}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 flex items-center group"
                    >
                      GitHub
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            <h1>Education</h1>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/education/queens-college-campus-manhattan-skyline.jpg"
                  alt="University Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/education/queens-college-image.jpg"
                  alt="University Campus View"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">CUNY - Queens College</h3>
                <p className="text-gray-600 dark:text-gray-300">Computer Science BS • Expected Graduation: December 2025</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Coursework</h4>
                <div className="space-y-2">
                  {[
                    {
                      title: "Data Structures",
                      description: "Fundamentals data structures and their implementations: stacks, queues, trees (binary and AVL), heaps, graphs, hash tables.",
                      grade: "C"
                    },
                    {
                      title: "Principles of Programming Languages",
                      description: "Principles and implementation of programming languages.",
                      grade: "IP"
                    },
                    {
                      title: "Theory of Computation",
                      description: "Finite state machines, regular languages, regular expressions, grammars, context-free languages, pushdown automata, Turing machines, recursive sets, recursively enumerable sets, reductions, Halting problem, diagonalization.",
                      grade: "B+"
                    },
                    {
                      title: "Design and Analysis of Algorithms",
                      description: "Advanced data structures: B-trees, graphs, hash-tables. Problem-solving strategies including divide-and-conquer, backtracking, dynamic programming, and greedy algorithms.",
                      grade: "B"
                    },
                    {
                      title: "Database Systems",
                      description: "ER modeling; functional dependencies and relational design; file organization and indexing; relational algebra and calculi as query languages; SQL",
                      grade: "IP"
                    },
                    {
                      title: "Operating Systems Principles",
                      description: "Principles of the design and implementation of operating systems.",
                      grade: "IP"
                    },
                    {
                      title: "Computer Architecture",
                      description: "Instruction set architectures, including RISC, CISC, stack, and VLIW architectures. ",
                      grade: "C+"
                    },
                    {
                      title: "Web & Internet Technologies",
                      description: "Internet protocol stack, analysis of representation protocols; Internet applications: client-server architecture, popular Internet application protocols, Internet application design, client side programming, server side programming, Web application and website design",
                      grade: "IP"
                    },
                    {
                      title: "Software Engineering",
                      description: "Principles of software engineering including the software life cycle, reliability, maintenance, requirements and specifications, design, implementation and testing",
                      grade: "A"
                    }
                  ].map((course, index) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                      onClick={() => toggleCourse(course.title)}
                      className={`group bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
                        expandedCourse === course.title ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {course.title}
                            </h5>
                            <motion.svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedCourse === course.title ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </div>
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">{course.grade}</span>
                        </div>
                        <AnimatePresence>
                          {expandedCourse === course.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {course.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300">
              © 2024 Dominik Kasza. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Guciosk" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/dominik-kasza-399775260/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
