"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Github } from 'lucide-react';

const NosotrosPage = () => {
  return (
    <div className="pt-24">
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card 
          title="Henry Maldonado" 
          hoverTitle="ELperrocode" 
          hoverDescription="Me he especializado en diversas áreas del desarrollo de software, con experiencia en lenguajes como Java, Python, PHP y VB.NET. Me interesa tanto el desarrollo backend como la programación frontend, lo que me permite adaptarme a distintos tipos de proyectos. Manejo bases de datos SQL y MySQL, y tengo experiencia trabajando con interfaces web usando HTML y CSS. Mi objetivo es seguir creciendo como desarrollador full stack, contribuyendo en todas las fases del desarrollo de software."
          description=""
          image="https://avatars.githubusercontent.com/u/168932407?v=4" 
          hoverImage="https://i.ibb.co/34K6SzZ/442332457-975730500325566-3437109556158634785-n.webp"
          githubLink="https://github.com/ELperrocode"
          link="https://github.com/ELperrocode"
        >
      <CanvasRevealEffect
  animationSpeed={3}
  containerClassName="bg-black"
  colors={[
    [173, 216, 230], // Light Blue
    [255, 182, 193], // Light Pink
  ]}
  dotSize={2}
/>
        </Card>
        <Card 
          title="Luis Murcia" 
          hoverTitle="quexopacode" 
          hoverDescription="Como desarrollador full stack, mi enfoque está en crear interfaces de usuario intuitivas y modernas utilizando HTML, CSS y JavaScript, complementadas con un backend eficiente en PHP y MySQL. Disfruto trabajar tanto en el frontend como en la lógica del servidor, asegurándome de que las aplicaciones sean no solo atractivas, sino también funcionales y optimizadas. Estoy siempre en busca de nuevas tecnologías y patrones de diseño que mejoren la experiencia de usuario y la escalabilidad del software."
          description=""
          image="https://avatars.githubusercontent.com/u/80013813?v=4" 
          hoverImage="https://cdn.discordapp.com/attachments/1034647366327881750/1298168585679667272/62596594_167755190921132_5954483609767322124_n.png?ex=67189535&is=671743b5&hm=f1439f907a66b9c9176bd472c724748d1576f1d3648ec7d3eed67c2ce2a6b78b&"
          githubLink="https://github.com/quexopacode"
          link="https://github.com/quexopacode"
        >
          <CanvasRevealEffect
  animationSpeed={3}
  containerClassName="bg-sky-900"
  colors={[
    [33, 22, 146], 
    [48, 233, 32], 
  ]}
  dotSize={2}
/>
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
          title="Ruben Rivera" 
          hoverTitle="IamBlack0" 
          hoverDescription="Soy un desarrollador full stack con una fuerte inclinación hacia el backend, utilizando tecnologías como PHP, Java y MySQL para construir APIs eficientes y robustas. También tengo experiencia en frontend con HTML, CSS y JavaScript, lo que me permite desarrollar aplicaciones web completas, asegurando tanto funcionalidad como una experiencia de usuario fluida. Mi objetivo es perfeccionar mis habilidades en arquitectura de software y bases de datos mientras continúo mejorando en el diseño de interfaces."
          description=""
          image="https://avatars.githubusercontent.com/u/120420525?v=4" 
          hoverImage="https://i.ibb.co/nzXtTYL/IMG-20241011-214654.jpg"
          githubLink="https://github.com/IamBlack0"
          link="https://github.com/IamBlack0"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  hoverTitle,
  description,
  hoverDescription,
  image,
  hoverImage,
  githubLink,
  link,
  children,
}: {
  title: string;
  hoverTitle: string;
  description: string;
  hoverDescription: string;
  image: string;
  hoverImage: string;
  githubLink: string;
  link: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <motion.div
          className="text-center transition duration-200 w-full mx-auto flex items-center justify-center"
          animate={{ scale: hovered ? 2.5 : 1.5, y: hovered ? -100 : 0 }}
        >
          <img src={hovered ? hoverImage : image} alt={title} className="h-20 w-20 rounded-full" />
        </motion.div>
        <motion.div
          className="flex items-center justify-center mt-4"
          animate={{ opacity: hovered ? 1 : 0.5, color: hovered ? "#ffffff" : "#000000" }}
        >
          <motion.h2
            className="text-xl font-bold transition duration-200"
          >
            {hovered ? hoverTitle : title}
          </motion.h2>
          {hovered && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="ml-2 text-white text-2xl" />
            </a>
          )}
        </motion.div>
        <motion.p
          className="text-sm relative z-10 mt-2 transition duration-200"
          animate={{ opacity: hovered ? 1 : 0, color: hovered ? "#ffffff" : "#000000" }}
        >
          {hovered ? hoverDescription : description}
        </motion.p>
      </div>
    </a>
  );
};

export default NosotrosPage;