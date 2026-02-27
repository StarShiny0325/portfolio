import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import {
  FaServer,
  FaReact,
  FaDatabase,
  FaJava,
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import {
  SiSpring,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from 'react-icons/si';
import { username, userrole } from '../../consts/contactInfo.json';
import professionalHighlights from '../../consts/highlights.json';

// Lazy load GitHubContributions component
const GitHubContributions = lazy(() => import('./GitHubContributions'));

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Use passive listener for better performance
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(checkMobile, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  const experiences = useMemo(
    () => [
      {
        icon: <FaRocket />,
        title: 'Full-Stack Development',
        description: 'Building end-to-end applications with modern tech stack',
      },
      {
        icon: <FaServer />,
        title: 'Backend Architecture',
        description: 'Designing scalable microservices and RESTful APIs',
      },
      {
        icon: <FaLightbulb />,
        title: 'Problem Solving',
        description:
          'Creating efficient solutions for complex business challenges',
      },
      {
        icon: <FaGraduationCap />,
        title: 'AI development',
        description: 'AI Architectur & ML/LLM & LAG Systems',
      },
    ],
    []
  );

  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate developer creating digital experiences that make a
            difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Avatar & About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: isMobile ? 0.4 : 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >

            <div className="card">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Hello! I'm {username}
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a{' '}
                  <span className="text-blue-400 font-semibold">
                    {userrole}
                  </span>{' '}
                  with a passion for building high-quality end-to-end web and
                  mobile applications in varioius industries.
                </p>
                <p>
                  With expertise in modern{' '}
                  <span className="text-green-400 font-semibold">Frontend</span>{' '}
                  technologies,{' '}
                  <span className="text-green-400 font-semibold">Backend</span>{' '}
                  architecture,{' '}
                  <span className="text-green-400 font-semibold">
                    Databases
                  </span>
                  , and{' '}
                  <span className="text-green-400 font-semibold">
                    API integration
                  </span>
                  , I create scalable solutions that drive business growth and
                  enhance user experiences.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest industry trends and best practices.
                  My goal is to build applications that not only work flawlessly
                  but also provide exceptional user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Experience Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: isMobile ? 0.4 : 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card text-center flex-column content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 text-3xl mb-4 flex justify-center">
                  {exp.icon}
                </div>
                <h4 className="font-semibold text-slate-100 mb-2">
                  {exp.title}
                </h4>
                <p className="text-slate-400 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Highlights Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Highlights
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalHighlights.map((highlight, highlightIndex) => (
              <motion.div
                key={highlightIndex}
                className="card group"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: highlightIndex * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="text-center mb-6">
                  <div
                    className={`text-3xl mb-3 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent flex justify-center`}
                  >
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-slate-100 text-lg">
                    {highlight.category}
                  </h4>
                </div>

                <div className="space-y-4">
                  {highlight.achievements.map(
                    (achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: highlightIndex * 0.2 + achievementIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-2">
                          <h5 className="font-semibold text-slate-100 text-sm">
                            {achievement.title}
                          </h5>
                          <span className="text-xs text-emerald-400 font-medium">
                            {achievement.impact}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { number: '8', label: 'Years Experience' },
            { number: '58+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.4,
                  ease: 'backOut',
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
