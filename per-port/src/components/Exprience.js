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
            style: "shadow-cyan-600",
        },
        {
            id: 5,
            title: "Tailwind",
            src: tailwind,
            style: "shadow-sky-400",
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
            style: "shadow-pink-400",
        },
        {
            id: 8,
            title: "GitHub",
            src: github,
            style: "shadow-gray-400",
        },
    ];

    return (
        <div name="experience" className="">
            <div className="">
                <div className="">
                    <p className="">Exprience</p>
                    <p className="">
                        These are the technologies I've worked with
                    </p>
                </div>
                {techs.map(({ id, title, src, style }) => (
                    <div key={id} className="">
                        <div className="">
                            <img src="" alt="" className="" />
                            <p className="mt-4"></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exprience;
