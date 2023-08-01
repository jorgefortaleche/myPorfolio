import React from "react";
import myImage from "../assets/ImagesPorfolio/profile-pic (3).png";

{
  /* <img src={myImage} alt="My image" /> */
}
//
function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-slate-900" // la clase h-screen se utiliza para establecer la altura de un elemento al tamaño completo de la pantalla del dispositivo, es decir, ocupa todo el espacio vertical disponible en la ventana del navegador o en el contenedor padre, PX: es el pading que se le da entre los dos divs para que el parrafo abajo tenga una distancia, el PY, se utiliza para agregar relleno vertical(pading), max-w-md con esta se establece el ancho maximo, md es la resolucion de pantalla en la que se aplicara el estilo, es decir, en pantallas medianas o mas grandes.
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl sm:text-7xl font-bold text-white ">
            I'm Full Stack Developer{" "}
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consectetur itaque omnis saepe quos nemo repudiandae veniam quasi,
            blanditiis impedit minus ipsam aliquam rerum fugiat similique,
            facere quae consequuntur in.
          </p>

          <div>
            <button>Portafolio</button>
          </div>
        </div>
        <div>
          <img
            className="border-solid border-8 rounded-full border-indigo-900 mx-auto w-2/3 md:w-full"
            src={myImage}
            alt="My image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
