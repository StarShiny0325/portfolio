import { useEffect, useRef, useState } from 'react';
import TypeWriter from './TypeWriter';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiMysql,
  SiPython,
  SiRuby,
  SiDocker,
  SiDotnet,
  SiCashapp,
} from 'react-icons/si';

// Lazy load heavy dependencies only when needed
let HeroModel = null;
let gsap = null;
let ScrollTrigger = null;
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../../utils/motion';

import {
  firstname,
  lastname,
  github,
  linkedin,
} from '../../consts/contactInfo.json';

// Dynamic imports for better mobile performance
const loadHeavyDependencies = async () => {
  try {
    const [heroModelModule, gsapModule] = await Promise.all([
      import('./HeroModel'),
      import('gsap'),
    ]);

    HeroModel = heroModelModule.default;
    gsap = gsapModule.default;

    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  } catch (error) {
    console.warn('Failed to load heavy dependencies:', error);
  }
};

function Home() {
  const contentRef = useRef(null);
  const techStackRef = useRef(null);
  const [show3D, setShow3D] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const techStack = [
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiReact, name: 'React', color: 'text-blue-400' },
    { icon: SiPython, name: 'Python', color: 'text-cyan-600' },
    { icon: SiDjango, name: 'Django', color: 'text-blue-600' },
    { icon: FaNodeJs, name: 'NodeJS', color: 'text-red-500' },
    { icon: SiAmazonwebservices, name: 'AWS', color: 'text-green-500' },
    { icon: SiPytorch, name: 'Pytorch', color: 'text-teal-400' },
    { icon: SiTensorflow, name: 'Tensorflow', color: 'text-slate-100' },
    { icon: SiRuby, name: 'Ruby', color: 'text-slate-100' },
    { icon: SiDocker, name: 'Docker', color: 'text-slate-100' },
    { icon: SiDotnet, name: 'APS.NET Core', color: 'text-slate-100' },
    { icon: SiCashapp, name: 'C#', color: 'text-slate-100' },
  ];

  // Performance check to decide whether to show 3D model and heavy animations
  useEffect(() => {
    const checkPerformance = () => {
      const mobile = window.innerWidth < 768;
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      const isHighPerformance =
        !connection || connection.effectiveType === '4g';
      const hasGoodHardware = window.devicePixelRatio <= 2;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      setIsMobile(mobile);
      setShow3D(
        isHighPerformance && hasGoodHardware && !mobile && !prefersReducedMotion
      );
      setAnimationsEnabled(!mobile && !prefersReducedMotion);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  // Load heavy dependencies only when needed
  useEffect(() => {
    if (animationsEnabled && !gsap) {
      loadHeavyDependencies();
    }
  }, [animationsEnabled]);

  useEffect(() => {
    // Only run animations if enabled and dependencies loaded
    if (!animationsEnabled || !gsap) return;

    // Wait a bit for gsap to be fully loaded
    const timer = setTimeout(() => {
      if (!gsap) return;

      // Staggered entrance animation for hero section
      const tl = gsap.timeline();

      tl.fromTo(
        '.hero-element',
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      // Floating animation for tech stack tags
      const techTags = techStackRef.current?.querySelectorAll('.tech-tag');

      if (techTags) {
        techTags.forEach((tag, index) => {
          gsap.to(tag, {
            y: '-=6',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
            ease: 'power1.inOut',
          });
        });
      }

      // Clean up animations on component unmount
      return () => {
        tl.kill();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [animationsEnabled]);

  return (
    <section className="section-padding pt-32 pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        // className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          ref={contentRef}
        >
          {/* Left column - Text content */}
          <motion.div variants={slideInFromTop}>
            <div className="space-y-8">
              <div className="hero-element">
                <p className="text-slate-300 font-medium text-lg mb-2">
                  Hello, I'm
                </p>
                <h1 className="font-bold mb-6">
                  <span
                    className={`text-4xl sm:text-5xl md:text-7xl gradient-text drop-shadow-2xl relative block ${isMobile ? 'leading-relaxed' : 'leading-normal whitespace-nowrap'} ${!isMobile ? 'animate-pulse-slow' : ''} py-2 font-extrabold`}
                  >
                    <span className="inline-block gradient-text">
                      {firstname}
                    </span>{' '}
                    <span className="inline-block gradient-text">
                      {lastname}
                    </span>
                    {!isMobile && (
                      <span className="absolute -inset-2 bg-white/3 blur-2xl rounded-2xl -z-10"></span>
                    )}
                  </span>
                </h1>
              </div>

              <div className="hero-element text-2xl md:text-4xl font-semibold text-slate-200 mb-8 h-16">
                <TypeWriter
                  texts={[
                    'AI/ML, Claude & LLM Systems | AI Automation | AWS | Kubernetes',
                    'ML Ops | Automation | Kubernetes | AWS | Claude',
                    'AI/ML | Python | Django | Docker | JWT',
                    'React | Next.js | TypeScript| Angular | Vue.js | Node.js'
                  ]}
                  delay={isMobile ? 100 : 80}
                  deleteDelay={isMobile ? 50 : 30}
                />
              </div>

              <p className="hero-element text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
                Experienced{' '}
                <span className="text-emerald-400 font-semibold">
                  Senior Software Engineer
                </span>
                . Passionate about frontend development, API design, and
                building{' '}
                <span className="text-violet-400 font-semibold">
                  scalable applications
                </span>
                .<br /> Extensive experience consulting for startups and
                delivering solutions across various industries, helping bring
                products from idea to launch.
              </p>

              <div className="hero-element flex flex-wrap gap-6">
                <button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="btn-primary flex items-center gap-3 cursor-pointer"
                >
                  View Projects <FaArrowRight className="text-lg" />
                </button>

                <div className="flex items-center gap-6">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-4 rounded-xl ${!isMobile ? 'hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20' : ''}`}
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-7 w-7" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-4 rounded-xl ${!isMobile ? 'hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20' : ''}`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-7 w-7" />
                  </a>
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="hero-element mt-16" ref={techStackRef}>
                <p className="text-slate-400 mb-6 text-lg font-medium">
                  Technologies I work with
                </p>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon; // grab the icon component
                    return (
                      <span
                        key={index}
                        className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect ${tech.color} text-sm rounded-xl border border-current/20 
                      hover:border-current/40 transition-all duration-300
                      ${!isMobile ? `hover:shadow-lg hover:shadow-${tech.color.replace('text-', '')}/10` : ''}`}
                      >
                        <Icon className="text-lg" /> {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - 3D model/image */}
          <motion.div variants={slideInFromRight(0.8)}>
            <div className="hero-element hidden lg:block relative">
              {show3D && HeroModel ? (
                <HeroModel />
              ) : (
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  {/* Modern geometric alternative to 3D model */}
                  <div className="relative opacity-60">
                    {/* Main glowing orb */}
                    <div
                      className={`w-80 h-80 bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-cyan-500/30 rounded-full blur-2xl neon-glow ${!isMobile ? 'animate-pulse-slow' : ''}`}
                    ></div>

                    {/* Floating geometric shapes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <div
                          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-blue-400/60 rounded-lg rotate-45 ${!isMobile ? 'animate-bounce-slow' : ''}`}
                        ></div>
                        <div
                          className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-violet-500/40 to-cyan-500/40 rounded-full ${!isMobile ? 'animate-pulse delay-500' : ''}`}
                        ></div>
                        <div
                          className={`absolute top-1/4 left-0 w-8 h-8 border border-cyan-400/60 rotate-12 ${!isMobile ? 'animate-pulse delay-1000' : ''}`}
                        ></div>
                        <div
                          className={`absolute bottom-1/4 left-1/4 w-6 h-16 bg-gradient-to-t from-blue-500/30 to-transparent rounded-full ${!isMobile ? 'animate-bounce-slow delay-700' : ''}`}
                        ></div>
                      </div>
                    </div>

                    {/* Orbiting rings - only on desktop */}
                    {!isMobile && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 border border-blue-400/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
                        <div className="absolute w-80 h-80 border border-violet-400/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                        <div className="absolute w-64 h-64 border border-cyan-400/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
                      </div>
                    )}

                    {/* Skill set svgs */}
                  </div>

                  {!isMobile && (
                    <>
                      <LazyLoadImage
                        src="/hero-bg.svg"
                        alt="work icons"
                        height={650}
                        width={650}
                        draggable={false}
                        className="opacity-100 absolute inset-0"
                      />
                    </>
                  )}
                </div>
              )}

              {/* Background grid pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
