import React from "react";
//import HeroImage from "../assets/portfolio/heroImage.jpg";
import { TbArrowRightCircle } from "react-icons/tb";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-b from-black to-gray-800"
        >
            <div>
                <div>
                    <h2>I am a Front-End Developer</h2>
                    <p>
                        {" "}
                        Add a brief bio of experience and prefrence in techs and
                        my evolution as a developer
                    </p>
                    <div>
                        <button>
                            Portfolio{" "}
                            <span>
                                <TbArrowRightCircle />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
