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
      <div key={project.id} className="flex flex-col lg:flex-row justify-around  items-center md:items-center gap-8 mb-20 lg:ml-10 ">
        {/* Imagen del proyecto */}
        <div className="w-64 h-64 -mb-12 md:mb-0   md:w-96 md:h-auto rounded-lg flex justify-center">
          <Image
            src={project.image}
            alt="foto del proyecto"
            width={400}
            className=" object-contain rounded-lg shadow-2xl border-2 border-gray-200 "
          />
        </div>
        <div className="max-w-lg flex flex-col justify-center sm:items-center lg:items-start">
          <h2 className="flex items-center justify-center text-xl font-bold">{project.work}</h2>
          {/* lenguajes de programacion */}
          <div
            id="lenguajes de programacion"
            className="flex justify-center items-center gap-2 mt-3 mb-3 font-bold text-xl "
          >
            <SkillIconsTailwindcssDark className=" bg-gray-700 dark:bg-gray-800 rounded-xl  w-10 h-8" />
            <SkillIconsNextjsLight className="   rounded-xl  w-10 h-8" />
            <DeviconReact className="   rounded-xl  w-10 h-8" />
            <SimpleIconsNextui className="   rounded-xl  w-10 h-8" />

          </div>

          <p className="flex justify-center items-center text-md text-gray-600 dark:text-gray-400 mt-3">
            {project.description}
          </p>

          <div className="flex justify-center items-center gap-2 mt-3 mb-3">
            <Link
              href={project.github}
              className=" items-center px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white "
            >
              <GithubProjects className="w-6 h-6 mr-2" />
              Code
            </Link>
            {project.link && (
            <Link
              href={project.link}
              className=" items-center px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white "
            >
              <LinkIcon2 className="w-5 h-5 mr-2" />
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
