import React from "react";
import "./home.css";
import HeroImage from "../assets/portfolio/heroImage.jpg";
import { TbArrowRightCircle } from "react-icons/tb";

const Home = () => {
    return (
        <div
            id="body"
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
        >
            <div
                className="max-w-screen-lg mx-auto flex flex-col
                              items-center justify-center h-full px-4 md:flex-row "
            >
                <div className="flex flex-col justify-center h-full">
                    <h2>I am a Front-End Developer</h2>
                    <p id="bio">
                        {" "}
                        Add a brief bio of experience and prefrence in techs and
                        my evolution as a developer
                    </p>
                    <div>
                        <button id="portfolio-btn">
                            Portfolio{" "}
                            <span>
                                <TbArrowRightCircle />
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
