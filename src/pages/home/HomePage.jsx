import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NavbarHome } from "../../components/NavbarHome";
import donovan from "../../assets/donovan.png";
import kinal from "../../assets/kinal.png";
import thePlanet from "../../assets/thePlanet.png";
import maquq from "../../assets/maq.png";
import albora from "../../assets/albora.png";
import rooma from "../../assets/rooma.jpg";
import santa from "../../assets/santamarta.jpg";
import kivora from "../../assets/kiv.png";
import compu from "../../assets/compu.png";
import cvPDF from "../../assets/RamiroMoralesCV.pdf";

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiCisco,
} from "react-icons/si";

import { FaJava, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const techSkills = [
  { name: "React.js", Icon: SiReact, level: 75 },
  { name: "HTML5", Icon: SiHtml5, level: 78 },
  { name: "CSS3", Icon: SiCss3, level: 65 },
  { name: "Node.js", Icon: SiNodedotjs, level: 92 },
  { name: "Java", Icon: FaJava, level: 82 },
  { name: "JavaScript", Icon: SiJavascript, level: 95 },
  { name: "Cisco", Icon: SiCisco, level: 65 },
  { name: "MongoDB", Icon: SiMongodb, level: 95 },
  { name: "MySQL", Icon: SiMysql, level: 89 },
  { name: "Socket.io", Icon: SiSocketdotio, level: 80 },
  { name: "GitHub", Icon: FaGithub, level: 85 },
];

const sortedSkills = [...techSkills].sort((a, b) => b.level - a.level);

const TechCard = ({ name, Icon, level, className }) => (
  <div
    className={`flex flex-col items-center bg-[#121212] rounded-xl p-6 shadow-lg border border-[#4CAF50] hover:scale-105 transition-transform duration-300 w-48 ${
      className ?? ""
    }`}
  >
    <Icon className="text-[#91FF00] w-16 h-16 mb-4" />
    <h4 className="text-white font-semibold text-lg mb-2 text-center">
      {name}
    </h4>
    <div className="w-full bg-gray-800 rounded-full h-4">
      <div
        className="h-4 rounded-full transition-all duration-500"
        style={{ width: `${level}%`, backgroundColor: "#91FF00" }}
      />
    </div>
    <span className="mt-2 text-sm font-mono text-[#91FF00]">{level}%</span>
  </div>
);

export const HomePage = () => {
  const [showComputrabajoModal, setShowComputrabajoModal] = useState(false);
  // Refs para cada fila
  const fila1Ref = useRef(null);
  const fila2Ref = useRef(null);
  const fila3Ref = useRef(null);
  const fila4Ref = useRef(null);

  useEffect(() => {
    const filas = [
      fila1Ref.current,
      fila2Ref.current,
      fila3Ref.current,
      fila4Ref.current,
    ];

    filas.forEach((fila, index) => {
      if (!fila) return;
      const cards = fila.querySelectorAll(".tech-card");

      gsap.fromTo(
        cards,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: fila,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      <NavbarHome />

      {/* HERO Section */}
      <section
        id="about"
        className="w-full min-h-screen pt-24 px-6 md:px-16 lg:px-32 bg-black relative overflow-hidden 
        flex flex-col-reverse lg:flex-row items-center justify-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Column */}
          <div className="z-10 w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hola a todos, soy
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Ramiro Morales
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-[#91FF00]">
              Desarrollador Full Stack
            </h3>
            <a
              href={cvPDF} // o "/cv.pdf" si está en public
              download="RamiroMorales_CV.pdf"
              className="relative inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-bold text-lg rounded-lg shadow-md hover:bg-[#91FF00] transition duration-300 mb-6"
            >
              Descargar CV
            </a>

            <p className="text-base sm:text-lg md:text-xl italic text-gray-300 mb-8">
              Tu futuro se define por las prioridades que establezcas en el
              presente
            </p>
          </div>

          {/* Image Column con círculo */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center z-0">
            <div className="rounded-full overflow-hidden bg-[#91FF00] w-52 sm:w-64 md:w-80 lg:w-96 aspect-square flex items-center justify-center">
              <img
                src={donovan}
                alt="Foto Ramiro Morales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME Section */}
      <section id="tech" className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            ACERCA DE MÍ
          </h2>
          <div className="text-gray-800 max-w-4xl mx-auto space-y-6 text-justify text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              <strong>Nombre:</strong> Ramiro Dónovan Morales López
            </p>
            <p>
              <strong>Edad:</strong> 18 años
            </p>
            <p>
              Soy estudiante de Ciencias de Computación, enfocado en el
              desarrollo de software con pasión por la mejora continua y el
              impacto positivo a través de la tecnología. Me especializo
              principalmente en backend, aunque también desarrollo frontend para
              aplicaciones web y móviles, buscando siempre crear soluciones
              eficientes y escalables.
            </p>
            <p>
              Cuento con experiencia en JavaScript, React.js, Node.js, MongoDB,
              MySQL, HTML, CSS, Git y Java. He participado en proyectos
              colaborativos, asumiendo roles de liderazgo y fomentando una
              comunicación clara y efectiva dentro del equipo para alcanzar
              objetivos comunes.
            </p>
            <p>
              Me considero una persona proactiva, con habilidades para resolver
              problemas y aprender rápidamente nuevas tecnologías. Mis objetivos
              son crecer profesionalmente, aportar soluciones innovadoras que
              generen valor real y continuar desarrollándome en el ámbito
              tecnológico, siempre con un enfoque en el trabajo en equipo y la
              mejora constante. Además, mantengo un equilibrio saludable con mis
              intereses en el deporte y la educación, lo que me permite mantener
              una visión integral y disciplinada.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES Section */}
      <section
        id="technologies"
        className="py-20 px-4 sm:px-6 md:px-16 lg:px-32 bg-black flex max-w-6xl mx-auto"
      >
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 md:mb-14 text-left text-white tracking-wide">
            Tecnologías y Herramientas
          </h2>

          {/* Desktop View - Pyramid Layout (1-2-3-5) */}
          <div className="hidden md:block">
            <div className="flex flex-col items-start space-y-8">
              {/* Fila 1 (1 elemento) */}
              <div ref={fila1Ref} className="flex justify-start">
                {[sortedSkills[0]].map(({ name, Icon, level }) => (
                  <TechCard
                    key={name}
                    name={name}
                    Icon={Icon}
                    level={level}
                    className="tech-card"
                  />
                ))}
              </div>

              {/* Fila 2 (2 elementos) */}
              <div ref={fila2Ref} className="flex justify-start space-x-8">
                {[sortedSkills[1], sortedSkills[2]].map(
                  ({ name, Icon, level }) => (
                    <TechCard
                      key={name}
                      name={name}
                      Icon={Icon}
                      level={level}
                      className="tech-card"
                    />
                  )
                )}
              </div>

              {/* Fila 3 (3 elementos) */}
              <div ref={fila3Ref} className="flex justify-start space-x-6">
                {[sortedSkills[3], sortedSkills[4], sortedSkills[5]].map(
                  ({ name, Icon, level }) => (
                    <TechCard
                      key={name}
                      name={name}
                      Icon={Icon}
                      level={level}
                      className="tech-card"
                    />
                  )
                )}
              </div>

              {/* Fila 4 (5 elementos) */}
              <div ref={fila4Ref} className="flex justify-start space-x-4">
                {[
                  sortedSkills[6],
                  sortedSkills[7],
                  sortedSkills[8],
                  sortedSkills[9],
                  sortedSkills[10],
                ].map(({ name, Icon, level }) => (
                  <TechCard
                    key={name}
                    name={name}
                    Icon={Icon}
                    level={level}
                    className="tech-card"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Grid Layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sortedSkills.map((skill) => (
                <TechCard
                  key={skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Div verde vertical a la derecha */}
        <div className="hidden lg:block w-2 rounded-l-lg bg-[#91FF00] ml-8"></div>
      </section>

      {/* EDUCATION Section (en blanco) */}
      <section
        id="education"
        className="py-20 px-6 md:px-16 lg:px-32 bg-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-[#20336B] tracking-tighter">
            EDUCACIÓN
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {/* Card 1 - Educación Básica */}
            <div className="w-full md:w-[400px] p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20  rounded-full flex items-center justify-center">
                  <img
                    src={kinal}
                    alt="Logo Kinal"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#20336B] text-center tracking-tight">
                Educación Básica
              </h3>
              <p className="font-normal text-gray-700 text-center leading-relaxed">
                2020 - 2022
                <br />
                <span className="font-semibold text-gray-800">
                  Centro Educativo Técnico Laboral Kinal
                </span>
              </p>
            </div>

            {/* Card 2 - Diversificado */}
            <div className="w-full md:w-[400px] p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20  rounded-full flex items-center justify-center">
                  <img
                    src={kinal}
                    alt="Logo Kinal"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#20336B] text-center tracking-tight">
                Diversificado
              </h3>
              <p className="font-normal text-gray-700 text-center leading-relaxed">
                2023 - 2025
                <br />
                <span className="font-semibold text-gray-800">
                  Centro Educativo Técnico Laboral Kinal
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section id="projects" className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-black tracking-tight">
            PROYECTOS DESTACADOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={thePlanet}
                  alt="Supermercado"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Gestión de Supermercado
                </h3>
                <p className="text-gray-400 mb-4">
                  Sistema completo para administrar inventario, ventas y
                  reportes con JavaFX y MySQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    JavaFX
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    iReport
                  </span>
                </div>
                <a
                  href="https://github.com/MoralesR-2020045/IN5BM_Proyecto_marketKinal"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Visitar Repositorio
                </a>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={maquq}
                  alt="Hotel Maq UQ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Hotel Maq UQ
                </h3>
                <p className="text-gray-400 mb-4">
                  Plataforma de reservas hoteleras con gestión de habitaciones y
                  servicios.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    HTML/CSS
                  </span>
                </div>
                <a
                  href="https://github.com/MoralesR-2020045/WebbHoteleria"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Visitar Repositorio
                </a>
              </div>
            </div>

            {/* Proyecto 3 - Banco Albora (único con "Ver Proyecto") */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={albora}
                  alt="Banco Albora"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Banco Albora
                </h3>
                <p className="text-gray-400 mb-4">
                  Banca virtual con transferencias, conversión de divisas y
                  panel administrativo.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a
                  href="https://deploy-sistemabancario.web.app/"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={rooma}
                  alt="Hotel Rooma"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Hotel Rooma
                </h3>
                <p className="text-gray-400 mb-4">
                  Sistema integral para gestión de hoteles con control de
                  habitaciones y reservas.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a
                  href="https://github.com/GroupDigitalFact/HotelManagement_Front"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Visitar Repositorio
                </a>
              </div>
            </div>

            {/* Proyecto 5 */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={kivora}
                  alt="Kivora"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">Kivora</h3>
                <p className="text-gray-400 mb-4">
                  Gestión de proyectos académicos con tableros Kanban y chat en
                  tiempo real.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Socket.io
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a
                  href="https://github.com/GroupDigitalFact/KIVORA_front"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Visitar Repositorio
                </a>
              </div>
            </div>

            {/* Proyecto 6 */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#91FF00] transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={santa}
                  alt="Hermandad"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Hermandad Santa Marta
                </h3>
                <p className="text-gray-400 mb-4">
                  Gestor de turnos y elementos procesionales para actividades
                  religiosas.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#91FF00]/10 text-[#91FF00] rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a
                  href="https://github.com/ProyectsSantaMarta/SantaMarta_Front"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-[#91FF00] text-black font-medium rounded-lg hover:bg-[#7AE600] transition"
                >
                  Visitar Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section
        id="contact"
        className="py-16 md:py-20 px-6 md:px-16 lg:px-32 bg-black"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-[#91FF00]">
            Contacto
          </h2>

          {/* Email directo */}
          <div className="mb-6 flex justify-center items-center gap-3 text-gray-300 text-lg">
            <i className="fas fa-envelope text-[#91FF00]"></i>
            <a
              href="mailto:ramiro@example.com"
              className="hover:underline hover:text-[#91FF00] transition"
            >
              ramiro@example.com
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-10 text-3xl mb-8">
            <a
              href="https://www.linkedin.com/in/ramiro-morales-6932a2248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#91FF00] transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/MoralesR-2020045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#91FF00] transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <button
              onClick={() => setShowComputrabajoModal(true)}
              className="text-white hover:text-[#91FF00] transition cursor-pointer"
            >
              <i className="fas fa-briefcase"></i>
            </button>
          </div>

          {/* Footer info */}
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Ramiro Morales. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            ¡Gracias por visitar mi portafolio personal!
          </p>
        </div>

        {/* Modal de Computrabajo */}
        {showComputrabajoModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative">
              <img
                src={compu}
                alt="Perfil de Computrabajo"
                className="max-w-[85vw] max-h-[85vh] object-contain border-4 rounded-lg shadow-xl"
              />
              <button
                onClick={() => setShowComputrabajoModal(false)}
                className="absolute -top-4 -right-4 bg-[#91FF00] text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform text-xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
