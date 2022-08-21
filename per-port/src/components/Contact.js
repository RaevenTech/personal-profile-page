import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col px-4 py-32 justify-center max-w-screen-lg mx-auto h-full md:py-32 md:px-16">
                <div className="pb-8">
                    <p className=" text-4xl front-bold inline border-b-2 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Get in touch with me</p>
                </div>
                <div className="flex justify-center items-center ">
                    <form
                        action="https://getform.io/f/359ec719-eecc-4d34-9ee9-06069dd2c56f"
                        method="POST"
                        className=" flex flex-col md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outLine-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outLine-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message..."
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outLine-none"
                        ></textarea>
                        <button
                            className="text-white bg-gradient-to-b from-cyan-400 to-blue-600 px-6 py-3 my-8 mx-auto
                        flex items-center rounded-md hover:scale-105 duration-200"
                        >
                            Reach out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
