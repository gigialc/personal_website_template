"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const SubstackIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 3.75H20.25V6.75H3.75V3.75Z" fill={color} />
    <path d="M3.75 8.25H20.25V11.25H3.75V8.25Z" fill={color} />
    <path d="M3.75 12.75H20.25V20.25L12 16.5L3.75 20.25V12.75Z" fill={color} />
  </svg>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-navy-100 p-4 sm:p-8">
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-pink-500">Georgina(Gigi)</a>
          <button 
            className="md:hidden text-pink-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`md:flex md:space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}>
            {['Home', 'Projects', 'About'].map((item) => (
              <li key={item} className="mb-2 md:mb-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-pink-300 hover:text-pink-500 transition-colors ${
                    activeSection === item.toLowerCase() ? 'font-bold text-pink-500' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-40 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <section id="home" className=" flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="/profilepic.png"
                alt="Gigi Alcaraz"
                width={200}
                height={200}
                className="rounded-full shadow-lg mb-8 mx-auto"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">Gigi Alcaraz</h1>
              <p className="text-lg md:text-xl text-navy-600 mb-8">
                Building in AI and blockchain right now 👩‍💻💌🪩🩷
              </p>
              <div className="flex justify-center space-x-4">
                {[
                  { href: "mailto:galcaraz@bu.edu", icon: Mail },
                  { href: "https://www.linkedin.com/in/georgina-alcaraz/", icon: Linkedin },
                  { href: "https://twitter.com/gigiialc", icon: Twitter },
                  { href: "https://github.com/gigialc", icon: Github },
                  { href: "https://substack.com/@gigialcaraz?utm_source=edit-profile-page", icon: SubstackIcon },
                  { href: "https://www.youtube.com/@gigialcaraz", icon: Youtube },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-pink-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="projects" className="my-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Womenx Innovators 🩷",
                  description: "A community dedicated to building the next generation of female unicorn founders focused on making the world a better place.",
                  link: "https://www.womenxinnovators.com/",
                  linkText: "Explore the community"
                },
                {
                  title: "Avocado Health 🥑",
                  description: "AI copilot for health writing.",
                  link: "https://avocadoai.vercel.app/api",
                  linkText: "Discover Avocado Health"
                },
                {
                  title: "AI Stylist 👠",
                  description: "Your personal AI stylist based on your pinterest board.",
                  link: "https://aifashion-seven.vercel.app/",
                  linkText: "Try AI Stylist"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl text-black md:text-2xl font-semibold mb-2 text-navy-800">{project.title}</h3>
                    <p className="text-navy-600 mb-4 text-black">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="about" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">More about me</h2>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-navy-700 space-y-4 text-black">
                <p>🪂 I have gone skydiving twice in my life and was a competitive alpine skier at one point.</p>
                <p>💻 I learned how to code in high school because I wanted to channel my creativity into building for others.</p>
                <p>🇪🇸 I'm from Spain, the funnest country ever.</p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}