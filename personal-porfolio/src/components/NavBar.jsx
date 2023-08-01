import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const lista = [
    { id: 1, name: "inicio" },
    { id: 2, name: "sobre mí" },
    { id: 3, name: "proyectos" },
    { id: 4, name: "tecnologías" },
    { id: 5, name: "contacto" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-24 px-6 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Jorge</h1>
      </div>

      <ul className="hidden md:flex">
        {lista.map((object) => (
          <li
            key={object.id}
            className="px-6 cursor-pointer capitalize font-medium hover:scale-105 duration-200  text-gray-400"
          >
            {object.name}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden "
      >
        {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400  ">
          {lista.map((object) => (
            <li
              key={object.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              {object.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
