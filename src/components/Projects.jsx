import React from 'react'
import ecommerce from "../assets/ecommerce.png";
import myntra from "../assets/myntra.png";
import sports from "../assets/sports.png";
import quiz from "../assets/quiz.png";
import weather from "../assets/weather.png";
import todo from "../assets/todo.png";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = ({ darkMode }) => {

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web Application (Amazon UI Clone)',
      desc: 'A responsive e-commerce frontend inspired by Amazon with product listings, navigation bar, and cart UI.',
      image: ecommerce,
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Fashion E-Commerce Frontend (Myntra UI Clone)',
      desc: 'A fashion shopping website UI inspired by Myntra with modern layout and responsive design.',
      image: myntra,
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Real-Time Weather Forecast Application',
      desc: 'A modern weather application that fetches live data from an API and displays real-time temperature, humidity levels, and detailed weather conditions',
      image: weather,
      tags: ['HTML', 'CSS', 'JavaScript', 'API']
    },
    {
      id: 4,
      title: 'Interactive Quiz & Knowledge Testing Application',
      desc: 'An interactive quiz app with multiple questions, score tracking, and dynamic result display.',
      image: quiz,
      tags: ['HTML', 'CSS', 'React.js']
    },
    {
      id: 5,
      title: 'Sports Club Management System (Full-Stack Web Application)',
      desc: 'A full-stack system to manage members, events, and activities of a sports club with admin features.',
      image: sports,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      id: 6,
      title: 'Task Management & To-Do List Application',
      desc: 'A task manager to add, delete, and track daily tasks with a clean and simple UI.',
      image: todo,
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section
      id='projects'
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className='relative mx-auto px-4 pb-20'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10' data-aos='fade-up'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My
            <span
              style={{
                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className='max-w-xl mx-auto'
            style={{ color: darkMode ? '#d1d5bd' : '#667280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right,#1f2937,#111827)'
                  : 'linear-gradient(to right,#ffffff,#f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='h-36 overflow-hidden rounded-t-xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              <div className='p-4'>
                <h3
                  className='text-lg font-bold mb-2'
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-3'
                  style={{ color: darkMode ? '#d1d5bd' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5bd' : '#4b5563'
                      }}
                      className='px-2 py-1 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-2'>
                  <a
                    href="#"
                    className='flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg border transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='200'
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#1f2937',
                      borderColor: '#e5e7eb'
                    }}
                  >
                    <FaGithub className='text-sm' />
                    <span>Code</span>
                  </a>

                  <a
                    href="#"
                    className='flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='300'
                    style={{
                      background: 'linear-gradient(to right,#f97316,#f56e0b)'
                    }}
                  >
                    <FaExternalLinkAlt className='text-sm' />
                    <span>Demo</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <a
            href="#"
            className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
            data-aos='zoom-in'
            data-aos-delay='400'
            style={{
              background: 'linear-gradient(to right,#f97316,#f56e0b)'
            }}
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className='text-sm' />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;