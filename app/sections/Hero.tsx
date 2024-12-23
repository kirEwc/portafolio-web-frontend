import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import Container from "@/components/Container";
import { HugeiconsMailAdd02, IconoirLinkedin, SolarFileDownloadBroken } from "@/components/icons/botonesicons";

export default function Hero() {
  return (
    <section id="hero">
        <Container>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-6">
        <Image
          src="/images/airdev.webp"
          alt="Card background"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div id="cartel de disponibilidad" className="max-w-52 h-9 animate-slowMove">
          <Card className="w-full h-auto border border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] transition-transform duration-300">
            <p className="p-1 pl-2">Disponible para trabajar</p>
          </Card>
        </div>
      </div>

      <div id="contenido sobre mi" className="flex flex-col items-center justify-center mt-6">
        <h1 className="font-bold text-5xl ">Hola , soy AirDev</h1>
        <h3 className="text-2xl mt-4">
          +3 años de experiencia. <br className="md:hidden"/>
          <span className="text-yellow-600 dark:text-yellow-500">
            Ingeniero de Software
          </span>
          , especializado en el desarrollo de aplicaciones web fronted únicas.
        </h3>

        <div className=" w-full flex justify-center space-x-10 mt-4">
        <Button 
            color="default" 
            variant="shadow"
            className=" bg-gradient-to-tr from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600"
            onClick={() => window.location.href = "mailto:aldairguerracedeno@gmail.com?subject=Asunto&body=Quiero%20contratar%20sus%20servicios%20de%20frontend%20developer" }
            >
        <HugeiconsMailAdd02 className="w-6 h-6" />
            Contactame
        </Button>
        <Button 
            color="default" 
            variant="shadow" 
            className=" bg-gradient-to-tr from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600"
            //onClick={() => window.location.href = "https://drive.google.com/file/d/1-5-1-2-3-4-5/view?usp=sharing" }
            >
        <SolarFileDownloadBroken className="w-6 h-6" />
            Descargar CV
        </Button>  

        {/* <Button 
            color="default" 
            variant="shadow" 
            className=" bg-gradient-to-tr from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600"
            onClick={() => window.location.href = "https://www.linkedin.com/in/aldair-guerra-cedeño-a9819933a/" }
            >
        <IconoirLinkedin className="w-6 h-6" />
            LinkedIn
        </Button> */}
        </div>

      </div>

      </Container>
    </section>
  );
}
