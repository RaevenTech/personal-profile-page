import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/search/results/all/?keywords=raeven%20gon%C3%A7alves",
            style: "rounded-tr-lg",
        },
    ];

    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                <li
                    className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px]
                    hover:ml-[-10px] hover:rounded-lg duration-300 bg-gray-600"
                >
                    <a
                        href="https://www.linkedin.com/search/results/all/?keywords=raeven%20gon%C3%A7alves"
                        className="flex justify-between items-center w-full text-gray-300"
                    >
                        <>
                            LinkedIn <FaLinkedin size={30} />
                        </>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
