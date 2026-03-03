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
  SiTypescript,
  SiSharp,
  SiProgress,
  SiApifox,
  SiMicrostrategy,
  SiBackendless,
  SiNodedotjs,
  SiArchicad,
  SiFrontendmentor,
  SiWebassembly,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiThemodelsresource,
  SiTimescale,
  SiDatacamp,
  SiClaude,
  SiSystem76,
  SiVectorworks,
  SiOpensearch,
  SiJfrogpipelines,
  SiKnowledgebase,
  SiAmazonwebservices,
  SiKubernetes,
  SiTerraform,
  SiMlflow,
  SiApacheairflow,
  SiCampaignmonitor,
  SiZapier,
  SiN8N,
  SiMake,
  SiSalesforce,
  SiCloudera,
  SiCloud66,
  SiFusionauth,
  SiInductiveautomation,
} from 'react-icons/si';
import {
  FaDatabase,
  FaTools,
  FaCloud,
  FaRocket,
  FaCube,
  FaCode,
  FaBrain,
  FaCodeBranch,
  FaCodepen,
  FaSignLanguage,
} from 'react-icons/fa';

import projectHighlights from '../../consts/projectHighlight.json';

function TechStack() {
  // Tech Stack data organized by categories
  const techCategories = useMemo(
    () => [
      {
        id: 2,
        title: 'Programming & Application Development',
        icon: FaRocket,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20',
        technologies: [
          {
            name: 'Python',
            icon: SiPython,
            color: '#61DAFB',
          },
          {
            name: 'JavaScript (ES6+)',
            icon: SiJavascript,
            color: '#ffffffff',
          },
          {
            name: 'TypeScript',
            icon: SiTypescript,
            color: '#06B6D4',
          },
          {
            name: 'C#',
            icon: SiSharp,
            color: '#12da1cff',
          },
          {
            name: 'Object-Oriented Programming',
            icon: SiProgress,
            color: '#0055FF',
          }
        ],
      },
      {
        id: 1,
        title: 'Frontend & Web Technologies',
        icon: FaCode,
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20',
        technologies: [
          { name: 'React',
             icon: SiReact,
            color: '#e9ed00ff' 
          },
          {
            name: 'AngularJS',
            icon: SiAngular,
            color: '#6DB33F',
          },
          {
            name: 'Node.js (Express)',
            icon: SiNodedotjs,
            color: '#ce1f1fff',
          },
          {
            name: 'Component-Based UI Architecture',
            icon: SiArchicad,
            color: '#6DB33F',
          },
          {
            name: 'Asynchronous Programming',
            icon: FaCode,
            color: '#FF6B6B',
          }
        ],
      },
      {
        id: 3,
        title: 'Machine Learning & Statistical Modeling',
        icon: FaDatabase,
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20',
        technologies: [
          { name: 'scikit-learn', 
            icon: SiScikitlearn, 
            color: '#4479A1' 
          },
          {
            name: 'PyTorch',
            icon: SiPytorch,
            color: '#003545',
          },
          {
            name: 'MongoDB',
            icon: SiTensorflow,
            color: '#47A248',
          },
          { name: 'Statistical Modeling', 
            icon: SiThemodelsresource, 
            color: '#26b1dbff' 
          },
          { name: 'Feature Engineering', 
            icon: FaCodeBranch, 
            color: '#008CC1' 
          },
        ],
      },
      {
        id: 4,
        title: 'LLM, RAG & AI Systems',
        icon: FaTools,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
        technologies: [
          {
            name: 'Claude API Integration',
            icon: SiClaude,
            color: '#000000',
          },
          {
            name: 'Prompt Engineering',
            icon: FaCodepen,
            color: '#007ACC',
          },
          { name: 'Retrieval-Augmented Generation', 
            icon: SiSystem76, 
            color: '#F05032'
          },
          {
            name: 'Embeddings & Vector Representations',
            icon: SiVectorworks,
            color: '#FF6C37',
          },
          {
            name: 'Semantic Similarity Search',
            icon: SiOpensearch,
            color: '#000000',
          },
          {
            name: 'Context Injection Pipelines',
            icon: SiJfrogpipelines,
            color: '#007ACC',
          }
        ],
      },
      {
        id: 5,
        title: 'Cloud, DevOps & ML Ops',
        icon: FaCloud,
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20',
        technologies: [
          {
            name: 'AWS (EKS, EC2, RDS)',
            icon: SiAmazonwebservices,
            color: '#2496ED',
          },
          {
            name: 'Kubernetes',
            icon: SiKubernetes,
            color: '#000000',
          },
          {
            name: 'Docker',
            icon: SiDocker,
            color: '#3448C5',
          },
          {
            name: 'Terraform (Infrastructure as Code)',
            icon: SiTerraform,
            color: '#f1f1f1ff',
          },
          {
            name: 'MLflow',
            icon: SiMlflow,
            color: '#2496ED',
          },
          {
            name: 'Apache Airflow',
            icon: SiApacheairflow,
            color: '#000000',
          }
        ],
      },
      {
        id: 6,
        title: 'Automation, Integration & Data Systems',
        icon: FaBrain,
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20',
        technologies: [
          {
            name: 'Zapier',
            icon: SiZapier,
            color: '#10A37F',
          },
          {
            name: 'n8n',
            icon: SiN8N,
            color: '#d8ec1dff',
          },
          {
            name: 'Make.com',
            icon: SiMake,
            color: '#10A37F',
          },
          {
            name: 'Salesforce Sales Cloud Integration',
            icon: SiSalesforce,
            color: '#CC785C',
          },
          {
            name: 'Salesforce Service Cloud Integration',
            icon: SiCloud66,
            color: '#10A37F',
          },
          {
            name: 'OAuth2 Authentication',
            icon: SiFusionauth,
            color: '#d8ec1dff',
          }
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
