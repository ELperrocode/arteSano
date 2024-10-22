"use client";

import Image from 'next/image';
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["Sano", "Limpio", "Vivo", "Libre", "Nuestro"];
  const colors = ["text-blue-800", "text-green-600", "text-red-700", "text-yellow-700", "text-purple-600"];
  
  return (
    <div className="relative h-screen flex flex-col">
      {/* Image Background */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/casco_antiguo.jpg"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Black Transparent Mask */}
        <div className="absolute inset-0 bg-black opacity-20 z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex-1 flex items-center justify-center overflow-hidden">
        <div className="relative z-30 max-w-5xl mx-auto p-4 sm:p-8 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-slate-100 text-shadow-lg">
            Todo por un arte más <br /><FlipWords words={words} colors={colors} />
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-100 text-shadow-md">
            En nuestra tienda en línea <span className="text-3xl">
            Arte
            <span className="text-blue-500 font-bold">Sano</span>
          </span>, elaborado por <span className="font-bold">Shadow Wizard Coding Gang</span>,
          encontrarás productos artesanales, turísticos y locales que celebran la diversidad cultural y el espíritu emprendedor. ¡Compra con conciencia y sé parte de una comunidad que hace la diferencia!
          </p>
        </div>
      </div>
    </div>
  );
}