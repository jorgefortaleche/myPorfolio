import React from "react";
import hod from "../assets/ImagesPorfolio/login.png";
import geek from "../assets/ImagesPorfolio/geek.png";
import { BsGithub } from "react-icons/bs";
import { RiAtLine } from "react-icons/ri";

function Porfolio() {
  const projects = [
    {
      id: 1,
      image: geek,
      name: "Geek central store",
      description: `Desarrollamos en equipo una e-commerce para la venta de productos geek en 2 sprint semanales, para este protyecto usamos Node.js, React.js, Redux, Axios, PosgreSQL, JWT, Express.js, Boostrap, Sequelize, bcrypt.`,
      href: "https://github.com/NahuelVenerus/geek-central-front",
    },
    {
      id: 2,
      image: hod,
      name: "HOD",
      description: `Desarrollamos en 4 sprint semanales un sitio web dirigido al rubro inmobiliario, que tenía como objetivo principal poder agendar citas, las tecnologías implementadas fueron, Node.js, React.js, Redux, Axios, PosgreSQL, JWT, Express.js, React Boostrap, Sequelize.`,
      href: "https://github.com/RocioRomano95/house-of-dev-back",
    },
  ];

  return (
    <div name="proyectos" className="bg-slate-900  text-white w-full h-screen">
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-14 text-center">
          <h1 className="text-6xl font-bold inline border-b-4 border-white">
            Proyectos
          </h1>
        </div>

        <div className="grid sm:grid-rows-1 md:grid-rows-1 sm:grid-cols-2 md-grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" group relative overflow-hidden cursor-pointer shadow-md shadow-purple-600 rounded-xl "
            >
              <div className="w-full h-full ">
                <img
                  src={project.image}
                  alt=""
                  className="group-hover:rotate-6 group-hover:scale-125 transition-transform duration-500 rounded-lg w-full h-80 "
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/80 group-hover:to-black/70 "></div>

              <div className="max-w-screen-lg mx-auto absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[105%] group-hover:translate-y-0 duration-500 transition-all">
                <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center justify-center mb-2">
                  <h1>{project.name}</h1>
                </div>
                <p className="text-sm sm:text-sm md:text-sm lg:text-lg max-h-full text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="flex items-center justify-center ">
                  <button className="hover:scale-105 duration-300 hover:text-violet-600  rounded-full bg-slate-900 py-2 mx-2 px-2 text-lg ">
                    <RiAtLine size={30} />
                  </button>
                  <a href={project.href} target="_blank">
                    <button className="hover:scale-105 duration-300 hover:text-violet-600  rounded-full bg-slate-900 py-2 mx-2 px-2 text-lg">
                      <BsGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
