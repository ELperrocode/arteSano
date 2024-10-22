"use client";

import Image from 'next/image';
import { FlipWords } from "@/components/ui/flip-words";


export function Hero() {
  const words = ["Sano", "Limpio", "Vivo", "Libre", "Ecommerce"];
  const colors = ["text-blue-500", "text-green-500", "text-red-500", "text-yellow-500", "text-purple-500"];
  
  return (
    <div className="relative h-screen flex flex-col">
     
      <div className="relative flex-1 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="hero image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto p-4 sm:p-8 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white text-shadow-lg">
            Todo por un arte más <br /><FlipWords words={words} colors={colors} />
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 text-shadow-md">
            En nuestra tienda en línea <span className="text-3xl">
            Arte
            <span className="text-blue-500 font-bold">Sano</span>
          </span>, elaborado por <span className="font-bold">Shadow Wizard Coding Gang, </span>
           encontrarás productos artesanales, turísticos y locales
          que celebran la diversidad cultural y el espíritu
          emprendedor. ¡Compra con conciencia y sé parte de una
          comunidad que hace la diferencia!
        
          </p>
        </div>
      </div>
    </div>
  );
}