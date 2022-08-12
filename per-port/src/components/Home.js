import React from "react";
import HeroImage from "../assets/portfolio/profilePic.jpg";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-scroll";

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
                <div className="flex flex-col justify-center h-content ">
                    <h2 className="text-4xl sm:text-5xl font-bold  text-white mt-20">
                        I'm a Front-End Developer
                    </h2>
                    <p id="bio" className="text-gray-500 py-4 max-w-md">
                        {" "}
                        Add a brief bio of experience and prefrence in techs and
                        my evolution as a developer. Using technologies like
                        HTML, CSS, JavaScript, React, React Router DOM,
                        Tailwind, bootstrap and Firebase
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            id="portfolio-btn"
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                             bg-gradient-to-r from-cyan-300 via-cyan-600 to-darkblue-600 cursor-pointer"
                        >
                            Portfolio{" "}
                            <span className="group-hover:rotate-90 duration-300 pl-2">
                                <VscChevronRight size={25} className="" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        id="profile-image"
                        src={HeroImage}
                        alt="hero"
                        className="rounded-2xl mx-auto w-3/5 md:w-3/5 mt-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
