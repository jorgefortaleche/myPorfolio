import React from "react";
import boostrapImage from "../assets/ImagesPorfolio/Bootstrap.png";
import github from "../assets/ImagesPorfolio/gitHub.png";
import javaScript from "../assets/ImagesPorfolio/JavaScript.png";
import node from "../assets/ImagesPorfolio/node-js.jpg";
import postgresql from "../assets/ImagesPorfolio/Postgresql.png";
import reactImage from "../assets/ImagesPorfolio/reactImage.png";
import reduxImage from "../assets/ImagesPorfolio/reduxImage.jpg";
import sequelizeImage from "../assets/ImagesPorfolio/sequelize.png";
import tailwind from "../assets/ImagesPorfolio/tailwind.png";
import expressJs from "../assets/ImagesPorfolio/express.png";
import html from "../assets/ImagesPorfolio/html.png";
import css from "../assets/ImagesPorfolio/css.png";

function Tecnologias() {
  const techs = [
    {
      id: 1,
      src: boostrapImage,
      title: "boostrap",
      style: "shadow-md shadow-purple-600",
    },
    {
      id: 2,
      src: github,
      title: "github",
      style: "shadow-md shadow-white",
    },
    {
      id: 3,
      src: javaScript,
      title: "javaScript",
      style: "shadow-md shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "node",
      style: "shadow-md shadow-green-600",
    },
    {
      id: 5,
      src: postgresql,
      title: "postgresql",
      style: "shadow-md shadow-blue-600",
    },
    {
      id: 6,
      src: reactImage,
      title: "react",
      style: "shadow-md shadow-cyan-400",
    },
    {
      id: 7,
      src: reduxImage,
      title: "redux",
      style: "shadow-md shadow-violet-700",
    },
    {
      id: 8,
      src: sequelizeImage,
      title: "sequelize",
      style: "shadow-md shadow-blue-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "tailwind",
      style: "shadow-md shadow-cyan-400",
    },
    {
      id: 10,
      src: expressJs,
      title: "express",
      style: "shadow-md  shadow-gray-600",
    },
    {
      id: 11,
      src: html,
      title: "html",
      style: "shadow-md  shadow-orange-600",
    },
    {
      id: 12,
      src: css,
      title: "css",
      style: "shadow-md  shadow-blue-600",
    },
  ];
  return (
    <div
      name="tecnologias"
      className="bg-slate-900  text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10 text-center">
          <h2 className="text-6xl font-bold  border-b-4 p-4 border-white inline">
            Tecnologías
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8  px-12 sm:px-0">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={` hover:scale-105 duration-500 py-2 rounded-2xl capitalize ${tech.style}`}
            >
              <img
                src={tech.src}
                alt="image tech"
                className="w-20 mx-auto mt-6   "
              />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
