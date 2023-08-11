import React from "react";

function ContactMe() {
  return (
    <div
      name="contacto"
      className="w-full h-screen bg-gradient-to-b from-slate-900 to-black text-white p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 py-20 text-center">
          <h1 className="text-6xl font-bold inline border-b-4 border-white">
            Contactame
          </h1>
        </div>

        <div className="flex justify-center items-center py-8 ">
          <form
            action="https://getform.io/f/84ca610a-2861-4a77-81a2-d582bf45c8e9"
            method="POST"
            className="flex flex-col py-6 px-6  bg-gradient-to-l to-indigo-950 rounded-2xl sm:w-2/3 md:w-2/3 border-2 border-white shadow-xl shadow-purple-800 text-lg w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Apellido"
              className="p-4 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Telefono"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Email"
              className="p-4 my-6  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Deja tu mensaje"
              className="p-4 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-purple-900 to-purple-600 hover:scale-105 duration-200 px-16 py-3 mx-auto flex items-center rounded-lg text-lg">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
