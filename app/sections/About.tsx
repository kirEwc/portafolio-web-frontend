import { AboutMeIcon } from "@/components/icons/icons";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-24 mb-12">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10">
        <AboutMeIcon className="w-8 h-8" />
        Sobre mi
      </h2>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center md:justify-evenly">
        <div className="max-w-2xl mt-4">

        <p className=" text-md text-gray-600  dark:text-gray-300">
          Mi nombre es Aldair Guerra , aunque en el mundo de la programación
          también se me conoce como "AirDev".
          
            Estudie en la 
            <Link href="https://www.uci.cu/es/">
            <span className="text-blue-600 dark:text-blue-300">Universidad de las
          Ciencias Informaticas (UCI)</span></Link>, donde obtuve <span className="text-yellow-600 dark:text-yellow-300">mi título de "Ingeniero de
          Software"</span>.
        </p>
        <p className=" text-md text-gray-600 dark:text-gray-300 mt-3"> Desde entonces trabajo en el desarrollo de interfaces de
          usuario para aplicaciones web y móviles, enfocados en la creación de
          experiencias de usuario atractivas y eficientes.
          </p>
        </div>
        <Card className="mt-10 w-52 h-48 flex justify-center items-center transform rotate-3">
          <Image
            src="/images/airdev.webp"
            alt="About me"
            width={400}
            height={400}
            className="rounded-lg w-48 h-44  "
          />
          </Card>
      </div>
    </section>
  );
}
