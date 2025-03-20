import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import Container from "@/components/Container";
import { HugeiconsMailAdd02, SolarFileDownloadBroken } from "@/components/icons/botonesicons";

export default function Hero() {
  return (
    <section id="hero">
        <Container>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 animate-fadeIn">
        <Image
          src="/images/airdev.jpg"
          alt="Card background"
          width={100}
          height={100}
          className="rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
        />
        <div id="cartel de disponibilidad" className="max-w-52 h-9 animate-slowMove">
          <Card className="w-full h-auto border-2 border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] transition-all duration-300 hover:scale-105">
            <p className="p-1 pl-2 font-medium">Disponible para trabajar</p>
          </Card>
        </div>
      </div>

      <div id="contenido sobre mi" className="flex flex-col items-center justify-center mt-8 animate-scaleIn">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center transition-all duration-300">Hola, soy AirDev</h1>
        <h3 className="text-xl md:text-2xl mt-6 text-center max-w-3xl mx-auto leading-relaxed">
          +3 años de experiencia. <br className="md:hidden"/>
          <span className="text-yellow-600 dark:text-yellow-500 font-semibold">
            Ingeniero de Software
          </span>
          , especializado en el desarrollo de aplicaciones web frontend únicas.
        </h3>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
        <Button 
            color="default" 
            variant="shadow"
            size="lg"
            className="bg-gradient-to-tr from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600 hover:opacity-90 hover:scale-105 transition-all duration-300 w-64 sm:w-auto"
            onPress={() => window.location.href = "mailto:aldairguerracedeno@gmail.com?subject=Asunto&body=Quiero%20contratar%20sus%20servicios%20de%20frontend%20developer" }
            >
        <HugeiconsMailAdd02 className="w-6 h-6" />
            Contáctame
        </Button>
        <Button 
            color="default" 
            variant="shadow" 
            size="lg"
            className="bg-gradient-to-tr from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600 hover:opacity-90 hover:scale-105 transition-all duration-300 w-64 sm:w-auto"
            onPress={() => window.location.href = "https://drive.usercontent.google.com/download?id=1MeOQnnT_tf36KWE9Q1QIkkJRP560g9-P&export=download&authuser=0" }
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
