"use client";

import {  SolarSuitcaseBroken } from "@/components/icons/projecticons";

export default function Experience() {
  return (
    <section id="experiencia" className="mt-24">
        <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
            <SolarSuitcaseBroken className="w-8 h-8" />
            Experiencia Laboral
        </h2>


        {/* 1ra sección de experiencia */}
        <div className="flex justify-around mb-20">
        <div>
        <h3 className="flex  items-center gap-2 font-bold text-xl text-yellow-600 dark:text-yellow-500">
            Frontend Engineer
        </h3>
        <h4 className=" text-lg">Eclipse Agency</h4>
        <p className="text-md text-gray-600 dark:text-gray-400">Octubre 2024</p>
        </div>
        <div className="max-w-lg">
        <p>
            Diseño y desarrollo frontend para una agencia de venta de boletos aéreos
            y servicios de viajes. Creación de interfaces de usuario intuitivas y
            funcionales, asegurando la mejor experiencia para los usuarios.
            Implementación de prácticas modernas de diseño y tecnologías web.
        </p>
        </div>
        </div>

      {/* 2da sección de experiencia */}
        <div className="flex justify-around mb-24">
        <div>
        <h3 className="flex  items-center gap-2 font-bold text-xl text-yellow-600 dark:text-yellow-500">
            Frontend Engineer
        </h3>
        <h4 className=" text-lg">Eclipse Agency</h4>
        <p className="text-md text-gray-600 dark:text-gray-400">Octubre 2024</p>
        </div>
        <div className="max-w-lg">
        <p>
            Diseño y desarrollo frontend para una agencia de venta de boletos aéreos
            y servicios de viajes. Creación de interfaces de usuario intuitivas y
            funcionales, asegurando la mejor experiencia para los usuarios.
            Implementación de prácticas modernas de diseño y tecnologías web.
        </p>
        </div>
        </div>
    </section>
  );
}
