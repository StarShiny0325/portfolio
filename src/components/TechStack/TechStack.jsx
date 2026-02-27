import { useMemo } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../SEO/SEOHead';
import { SEO_CONFIGS } from '../SEO/seoConfigs';
import {
  SiReact,
  SiAngular,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiPostman,
  SiMariadb,
  SiCloudinary,
  SiVercel,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNeo4J,
  SiPython,
  SiDjango,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiHuggingface,
  SiVuedotjs,
  SiRedux,
} from 'react-icons/si';
import {
  FaDatabase,
  FaTools,
  FaCloud,
  FaRocket,
  FaCube,
  FaCode,
  FaBrain,
} from 'react-icons/fa';

import projectHighlights from '../../consts/projectHighlight.json';

function TechStack() {
  // Tech Stack data organized by categories
  const techCategories = useMemo(
    () => [
      {
        id: 2,
        title: 'Frontend Development',
        icon: FaRocket,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20',
        technologies: [
          {
            name: 'React.js',
            icon: SiReact,
            color: '#61DAFB',
          },
          {
            name: 'Next.js',
            icon: SiNextdotjs,
            color: '#ffffffff',
          },
          {
            name: 'Angular',
            icon: SiAngular,
            color: '#06B6D4',
          },
          {
            name: 'Vue.js',
            icon: SiVuedotjs,
            color: '#12da1cff',
          },
          {
            name: 'Redux',
            icon: SiRedux,
            color: '#0055FF',
          },
        ],
      },
      {
        id: 1,
        title: 'Backend Development',
        icon: FaCode,
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20',
        technologies: [
          { name: 'JavaScript', icon: SiJavascript, color: '#e9ed00ff' },
          {
            name: 'Python',
            icon: SiPython,
            color: '#6DB33F',
          },
          {
            name: 'Django',
            icon: SiDjango,
            color: '#ce1f1fff',
          },
          {
            name: 'PHP',
            icon: SiPhp,
            color: '#6DB33F',
          },
          {
            name: 'Ruby',
            icon: FaCode,
            color: '#FF6B6B',
          },
        ],
      },
      {
        id: 3,
        title: 'Database Systems',
        icon: FaDatabase,
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20',
        technologies: [
          { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
          {
            name: 'MariaDB',
            icon: SiMariadb,
            color: '#003545',
          },
          {
            name: 'MongoDB',
            icon: SiMongodb,
            color: '#47A248',
          },
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#26b1dbff' },
          { name: 'Neo4J', icon: SiNeo4J, color: '#008CC1' },
        ],
      },
      {
        id: 4,
        title: 'Development Tools',
        icon: FaTools,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
        technologies: [
          {
            name: 'IntelliJ IDEA',
            icon: SiIntellijidea,
            color: '#000000',
          },
          {
            name: 'VS Code',
            icon: FaCode,
            color: '#007ACC',
          },
          { name: 'Git', icon: SiGit, color: '#F05032' },
          {
            name: 'Postman',
            icon: SiPostman,
            color: '#FF6C37',
          },
        ],
      },
      {
        id: 5,
        title: 'Cloud & Deployment',
        icon: FaCloud,
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20',
        technologies: [
          {
            name: 'Docker',
            icon: SiDocker,
            color: '#2496ED',
          },
          {
            name: 'Vercel',
            icon: SiVercel,
            color: '#000000',
          },
          {
            name: 'Cloudinary',
            icon: SiCloudinary,
            color: '#3448C5',
          },
          {
            name: 'GitHub',
            icon: SiGithub,
            color: '#f1f1f1ff',
          },
        ],
      },
      {
        id: 6,
        title: 'AI & Automation',
        icon: FaBrain,
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20',
        technologies: [
          {
            name: 'ChatGPT',
            icon: FaBrain,
            color: '#10A37F',
          },
          {
            name: 'HuggingFace',
            icon: SiHuggingface,
            color: '#d8ec1dff',
          },
          {
            name: 'OpenAI',
            icon: SiOpenai,
            color: '#10A37F',
          },
          {
            name: 'Claude AI',
            icon: FaBrain,
            color: '#CC785C',
          },
        ],
      },
    ],
    []
  );

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400';
      case 'Advanced':
        return 'text-blue-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Proficient':
        return 'text-purple-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-slate-300">
                Technology Stack
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">Technologies</span> & Tools
            </motion.h1>

            <motion.p
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive overview of the technologies, frameworks, and
              tools I use to build modern, scalable applications. From backend
              development to cloud deployment.
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className={`glass-effect rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon;
                      return (
                        <motion.div
                          key={techIndex}
                          className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            x: 5,
                            backgroundColor: 'rgba(51, 65, 85, 0.4)',
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <TechIcon
                              className="w-5 h-5"
                              style={{ color: tech.color }}
                            />
                            <span className="font-medium text-slate-200">
                              {tech.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-semibold ${getLevelColor(tech.level)}`}
                          >
                            {tech.level}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>



          {/* Call to Action */}
          <motion.div
            className="text-center glass-effect rounded-3xl p-12 border border-slate-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-white text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Let's Build Something Amazing
            </h3>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to leverage these technologies for your next project? Let's
              discuss how we can create innovative solutions together.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
