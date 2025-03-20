"use client";

import  {Projecticons, SkillIconsTailwindcssDark,SkillIconsNextjsLight, DeviconReact, SimpleIconsNextui, GithubProjects, LinkIcon2 } from "@/components/icons/projecticons";
import { Image, Link } from "@nextui-org/react";

export default function Projects() {


  const dataProjects = [
    {
      id: 1,
      work: "Eclipse Agency",
      description: "Una aplicación web de gestión de boletos aéreos y servicios de viajes. Creado desde cero con el framework Next.js, React , Tailwind CSS y NextUI.",
      image: "/images/eclipse.webp",
      link: "https://eclipse-frontend-six.vercel.app/",
      github: "https://github.com/kirEwc/eclipse",
    },
    {
      id: 2,
      work: 'Personal Website',
      description: 'Mi sitio web personal, creado con Next.js, Tailwind CSS y NextUI.',
      image: '/images/portafolio.webp',
      github: 'https://github.com/kirEwc/portafolio-web-frontend',
    }
    
  ]


  return (
    <section id="Projects" className="mt-24">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
        <Projecticons className="w-8 h-8" />
        Proyectos
      </h2>

      {dataProjects.map((project) => (
      <div key={project.id} className="flex flex-col lg:flex-row justify-around items-center gap-8 mb-20 lg:mb-32 px-4 lg:px-8 animate-fadeIn">
        {/* Imagen del proyecto */}
        <div className="w-full max-w-md lg:w-1/2 h-auto rounded-lg flex justify-center transform hover:scale-105 transition-all duration-300">
          <Image
            src={project.image}
            alt="foto del proyecto"
            width={600}
            className="object-cover w-full rounded-xl shadow-2xl border-2 border-gray-200 dark:border-gray-700"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-center lg:items-start space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">{project.work}</h2>
          {/* lenguajes de programacion */}
          <div
            id="lenguajes de programacion"
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
          >
            <SkillIconsTailwindcssDark className="bg-gray-700 dark:bg-gray-800 rounded-xl w-12 h-10 transform hover:scale-110 transition-transform duration-200" />
            <SkillIconsNextjsLight className="rounded-xl w-12 h-10 transform hover:scale-110 transition-transform duration-200" />
            <DeviconReact className="rounded-xl w-12 h-10 transform hover:scale-110 transition-transform duration-200" />
            <SimpleIconsNextui className="rounded-xl w-12 h-10 transform hover:scale-110 transition-transform duration-200" />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 text-center lg:text-left leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <Link
              href={project.github}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <GithubProjects className="w-6 h-6 mr-3" />
              Code
            </Link>
            {project.link && (
            <Link
              href={project.link}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <LinkIcon2 className="w-5 h-5 mr-3" />
              Preview
            </Link>
            )}
          </div>
        </div>
      </div>
      ))}

      

    </section>
  );
}
