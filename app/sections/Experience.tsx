"use client";

import { SolarSuitcaseBroken } from "@/components/icons/projecticons";

export default function Experience() {
  const dataExperience = [
    {
      id: 1,
      appointment: 'Frontend Engineer',
      agency: 'Eclipse Agency',
      date: 'Octubre 2024',
      description: "Diseño y desarrollo frontend para una agencia de venta de boletos aéreos y servicios de viajes. Creación de interfaces de usuario intuitivas y funcionales, asegurando la mejor experiencia para los usuarios. Implementación de prácticas modernas de diseño y tecnologías web.",
    },
    
  ];

  return (
    <section id="experiencia" className="mt-24">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
        <SolarSuitcaseBroken className="w-8 h-8" />
        Experiencia Laboral
      </h2>

      {/* 1ra sección de experiencia */}

      {dataExperience.map((experience) => (
        <div key={experience.id} className="flex flex-col gap4 lg:flex-row sm:justify-center sm:items-center md:justify-around mb-20">
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-bold text-xl text-yellow-600 dark:text-yellow-500 ">
              {experience.appointment }
            </h3>
            <h4 className=" text-lg">{experience.agency}</h4>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {experience.date}
            </p>
          </div>
          <div className="max-w-lg">
            <p>
              {experience.description}
            </p>
          </div>
        </div>
      ))}

    </section>
  );
}
