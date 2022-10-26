//import { ExternalLink } from "react-external-link";
import arrayDestruct from "../assets/portfolio/projects1.jpg";
//import navbar from "../assets/portfolio/navbar.jpg";
import reactWeather from "../assets/portfolio/projects3.jpg";
import javascript from "../assets/javaScript-bg.jpg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: arrayDestruct,
            description: " Coming soon",
            url: "Coming soon",
            code: "",
        },

        {
            id: 2,
            src: javascript,
            description:
                "Collection of small project using JavaScript,HTML and CSS",
            url: "https://javascript-simple.vercel.app/",
            code: "https://github.com/RaevenTech/javascript-simple",
        },

        {
            id: 3,
            src: reactWeather,
            description: "Coming soon",
            url: "Coming soon",
            code: "",
        },
    ];

    return (
        <div
            name="portfolio"
            className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div
                id="portfolio"
                className="max-w-screen-lg px-4 py-32 mx-auto flex flex-col justify-center w-full h-content "
            >
                <div className="pb-8 md:pl-16">
                    <p className="text-4xl font-bold inline border-b-2 border-gray-500 ">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work here</p>
                </div>
                {/*-- mapping through the projects to be displayed on the screen */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pr-4 sm:px-0 md:px-16">
                    {projects.map(({ id, src, code, url, description }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <p className=" text-gray-500 text-md mt-3">
                                {description}
                            </p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2  text-orange-600 px-6 py-1 m-4 duration-200 hover:scale-105">
                                    <a href={code}> Code</a>
                                </button>

                                <button className="w-1/2 px-6 text-orange-600  py-1 m-4 duration-200 hover:scale-105">
                                    <a href={url}> View</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
