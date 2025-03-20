import { AboutMeIcon } from "@/components/icons/icons";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-24 mb-12">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
        <AboutMeIcon className="w-8 h-8" />
        Sobre mi
      </h2>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-16 animate-fadeIn">
        <div className="w-full lg:w-3/5 max-w-2xl mt-4 space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Mi nombre es Aldair Guerra, aunque en el mundo de la programación
            también se me conoce como <span className="text-yellow-600 dark:text-yellow-500 font-semibold">"AirDev"</span>. Soy <span className="text-yellow-500 dark:text-yellow-400 font-semibold">ingeniero de software</span> con
            experiencia en el desarrollo de <span className="text-yellow-600 dark:text-yellow-500 font-semibold">interfaces de usuario</span> para
            aplicaciones web y móviles, enfocado en la creación de experiencias
            de usuario atractivas y eficientes.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Me apasiona mantenerme actualizado con las últimas <span className="text-yellow-500 dark:text-yellow-400 font-semibold">tecnologías</span> y
            tendencias del <span className="text-yellow-600 dark:text-yellow-500 font-semibold">desarrollo frontend</span>, buscando siempre mejorar la
            calidad y rendimiento de mis proyectos.
          </p>
        </div>
        <Card className="w-64 h-56 flex justify-center items-center transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 shadow-xl">
          <Image
            src="/images/airdev.jpg"
            alt="About me"
            width={400}
            height={400}
            className="rounded-lg w-60 h-52 object-cover"
            priority
          />
        </Card>
      </div>
    </section>
  );
}
