// ContactUs.js

import React from "react";

const ContactUs = () => {
    return (
        <div className="flex justify-center py-10 h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="pt-10 px-10 h-4/5 border-black border-2 rounded-3xl shadow-xl w max-w-md w-full">
                <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
                <p className="mb-5">
                    Feel free to reach out to us with any questions, feedback,
                    or inquiries.
                </p>
                <form className="mt-0">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
