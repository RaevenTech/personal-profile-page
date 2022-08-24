import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full- h-full">
                <div className="pb-8  mt-20 md:mt-8 md:pl-16">
                    <p className="text-4xl font-bold inline border-b-2 border-gray-500 ">
                        About
                    </p>
                </div>
                <p className="text-lg mt-5 md:px-16">
                    I have experience efficiently coding websites and
                    applications using modern HTML, CSS, JavaScript and React.
                    Building state-of-the-art, easy to use, user-friendly
                    websites and applications is truly a passion of mine, and I
                    am confident I would be an excellent addition to your
                    organization. In addition to my knowledge base of 15 years
                    in sales and marketing, I actively seek out new technologies
                    and stay up to date on industry trends and advancements.
                </p>

                <br />

                <p className="text-lg md:px-16 ">
                    This allows me to stay ahead of the curve and deliver
                    exceptional work. This thirst for knowledge will be
                    incorporated to any learning of new technologies. I look
                    forward to speaking with you about future opportunities.
                </p>
            </div>
        </div>
    );
};

export default About;
