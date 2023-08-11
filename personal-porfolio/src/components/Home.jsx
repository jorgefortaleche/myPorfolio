import React from "react";
import myImage from "../assets/ImagesPorfolio/profile-pic (3).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="inicio"
      className="h-screen w-full bg-gradient-to-b from-black to-slate-900 pt-10" // la clase h-screen se utiliza para establecer la altura de un elemento al tamaño completo de la pantalla del dispositivo, es decir, ocupa todo el espacio vertical disponible en la ventana del navegador o en el contenedor padre, PX: es el pading que se le da entre los dos divs para que el parrafo abajo tenga una distancia, el PY, se utiliza para agregar relleno vertical(pading), max-w-md con esta se establece el ancho maximo, md es la resolucion de pantalla en la que se aplicara el estilo, es decir, en pantallas medianas o mas grandes.
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-7xl font-bold text-white ">
            Developer
          </h1>
          <hr />
          <h2 className="text-lg lg:text-4xl font-bold text-white ">
            Full Stack
          </h2>
          <p className="text-white text-md lg:text-lg max-w-xl py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            veritatis natus a doloremque, culpa animi impedit enim ipsa quaerat
            nulla ipsum nihil dicta similique repellendus optio ut odit quasi.
            Iusto quas optio itaque numquam animi? Dignissimos, hic architecto
            eum omnis aliquam, eos, ea ad rerum possimus reprehenderit est quos
            illum!
          </p>
          <div>
            <Link to="proyectos" smooth duration={600}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-900 to-purple-600 hover:scale-105 duration-200">
                Portafolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={30} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <img
            className="border-solid border-8 rounded-full border-indigo-900 mx-auto w-2/3 md:w-full hover:scale-95 duration-200"
            src={myImage}
            alt="My image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
