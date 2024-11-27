import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import Container from "@/components/Container";
import { HugeiconsMailAdd02, SolarFileDownloadBroken } from "@/components/icons/botonesicons";

export default function Hero() {
  return (
    <section>
        <Container>
      <div className="flex items-center  justify-center space-x-6">
        <Image
          src="/images/airdev.webp"
          alt="Card background"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div id="cartel de disponibilidad" className="max-w-52 h-9 animate-slowMove">
          <Card className="w-full h-auto border border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] transition-transform duration-300">
            <p className="p-1 pl-2">Disponible para trabajar</p>
          </Card>
        </div>
      </div>

      <div id="contenido sobre mi" className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl ">Hola , soy AirDev</h1>
        <p className="text-2xl mt-4">
          +3 años de experiencia.
          <span className="text-yellow-600 dark:text-yellow-500 font-extrabold">
            Ingeniero de Software
          </span>
          , especializado en el desarrollo de aplicaciones web fronted únicas.
        </p>

        <div className=" w-full  space-x-10 mt-4">
        <Button color="default" variant="shadow" className="ml-24 bg-gradient-to-tr from-pink-500 to-yellow-500  shadow-lg">
            Contactame
        <HugeiconsMailAdd02 className="w-6 h-6" />
        </Button>
        <Button color="default" variant="shadow" className="ml-24 bg-gradient-to-tr from-pink-500 to-yellow-500">
            Descargar CV
        <SolarFileDownloadBroken className="w-6 h-6" />
        </Button>  
        </div>

      </div>

      </Container>
    </section>
  );
}
