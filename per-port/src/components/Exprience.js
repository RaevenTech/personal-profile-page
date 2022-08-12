import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Exprience = () => {
    const techs = [
        {
            id: 1,
            title: "HTML",
            src: html,
            style: "shadow-orange-500",
        },
        {
            id: 2,
            title: "CSS",
            src: css,
            style: "shadow-blue-500",
        },
        {
            id: 3,
            title: "JavaScript",
            src: javascript,
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            title: "React",
            src: reactimage,
            style: "shadow-cyan-500",
        },
        {
            id: 5,
            title: "Tailwind",
            src: tailwind,
            style: "shadow-teal-300",
        },
        {
            id: 6,
            title: "Next JS",
            src: nextjs,
            style: "shadow-white",
        },
        {
            id: 7,
            title: "GraphQl",
            src: graphql,
            style: "shadow-pink-600",
        },
        {
            id: 8,
            title: "GitHub",
            src: github,
            style: "shadow-gray-400",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-content"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-content text-white">
                <div>
                    <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">
                        Exprience
                    </p>
                    <p className="py-6">
                        These are the technologies I've worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0 ">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Exprience;
