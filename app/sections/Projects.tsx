"use client";

import  {Projecticons, SkillIconsTailwindcssDark,SkillIconsNextjsLight, DeviconReact, SimpleIconsNextui, GithubProjects, LinkIcon2 } from "@/components/icons/projecticons";
import { Image, Link, LinkIcon } from "@nextui-org/react";
// import Image from "next/image";

export default function Projects() {
  return (
    <section id="Projects" className="mt-24">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
        <Projecticons className="w-8 h-8" />
        Proyectos
      </h2>

      {/* 1er Proyecto */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-20 ml-10">
        {/* Imagen del proyecto */}
        <div className="w-96 h-auto rounded-lg flex justify-center">
          <Image
            src="/images/eclipse.webp"
            alt="Project Eclipse Agency"
            width={400}
            // height={250}
            className="w-full h-full object-contain rounded-lg shadow-2xl border-2 border-gray-200 "
          />
        </div>
        <div className="max-w-lg flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold">Eclipse Agency</h2>
          <div
            id="lenguajes de programacion"
            className="flex justify-center items-center gap-2 mt-3 mb-3 font-bold text-xl "
          >
            <SkillIconsTailwindcssDark className=" bg-gray-700 dark:bg-gray-800 rounded-xl  w-10 h-8" />
            <SkillIconsNextjsLight className="   rounded-xl  w-10 h-8" />
            <DeviconReact className="   rounded-xl  w-10 h-8" />
            <SimpleIconsNextui className="   rounded-xl  w-10 h-8" />

          </div>

          <p className="text-md text-gray-600 dark:text-gray-400">
            Una aplicación web de gestión de boletos aéreos y servicios de
            viajes. Creado desde cero con el framework Next.js, React , Tailwind
            CSS y NextUI.
          </p>

          <div className="flex justify-center items-center gap-2 mt-3 mb-3">
            
            <Link
              href="https://eclipse-phi.vercel.app/"
              className=" items-center px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white "
            >
              <LinkIcon2 className="w-5 h-5 mr-2" />
              Preview
            </Link>
          </div>
        </div>
      </div>

      {/* 2da seccion de proyectos */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-20 ml-10">
        {/* Imagen del proyecto */}
        <div className="w-96 h-auto rounded-lg flex justify-center">
          <Image
            src="/images/eclipse.webp"
            alt="Project Eclipse Agency"
            width={400}
            // height={250}
            className="w-full h-full object-contain rounded-lg shadow-2xl border-2 border-gray-200 "
          />
        </div>
        <div className="max-w-lg flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold">Eclipse Agency</h2>
          <div
            id="lenguajes de programacion"
            className="flex justify-center items-center gap-2 mt-3 mb-3 font-bold text-xl text-yellow-600"
          >
            <SkillIconsTailwindcssDark className=" bg-gray-700 rounded-xl  w-12 h-8" />
            <SkillIconsTailwindcssDark className=" bg-gray-700 rounded-xl  w-12 h-8" />
          </div>

          <p className="text-md text-gray-600 dark:text-gray-400">
            Una aplicación web de gestión de boletos aéreos y servicios de
            viajes. Creado desde cero con el framework Next.js, React , Tailwind
            CSS y NextUI.
          </p>

          <div className="flex justify-center items-center gap-2 mt-3 mb-3">
            <Link
              href="https://www.linkedin.com/in/aldair-guerra-cede%C3%B1o-a9819933a/"
              className=" items-center px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white "
            >
              <GithubProjects className="w-6 h-6 mr-2" />
              Code
            </Link>
            <Link
              href="https://www.linkedin.com/in/aldair-guerra-cede%C3%B1o-a9819933a/"
              className=" items-center px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-800 hover:text-white "
            >
              <LinkIcon2 className="w-5 h-5 mr-2" />
              Preview
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
