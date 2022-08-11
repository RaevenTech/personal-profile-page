import React from "react";
import "./home.css";
import HeroImage from "../assets/portfolio/profilePic.jpg";
import { GoChevronRight } from "react-icons/go";

const Home = () => {
    return (
        <div
            id="body"
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
        >
            <div
                className="max-w-screen-lg mx-auto flex flex-col
                              items-center justify-center h-full px-4 md:flex-row "
            >
                <div className="flex flex-col justify-center h-content">
                    <h2 className="text-4xl sm:text-7xl font-bold  text-white">
                        I am a Front-End Developer
                    </h2>
                    <p id="bio" className="text-gray-500 py-4 max-w-md">
                        {" "}
                        Add a brief bio of experience and prefrence in techs and
                        my evolution as a developer. Using technologies like
                        HTML, CSS, JavaScript, React, React Router DOM,
                        Tailwind, bootstrap and Firebase
                    </p>
                    <div>
                        <button
                            id="portfolio-btn"
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                             bg-gradient-to-r from-cyan-300 via-cyan-600 to-darkblue-600 cursor-pointer"
                        >
                            Portfolio{" "}
                            <span className="group-hover:rotate-90 duration-300 pl-2">
                                <GoChevronRight />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        id="profile-image"
                        src={HeroImage}
                        alt="hero"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
