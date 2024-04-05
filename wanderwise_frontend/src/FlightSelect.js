import React, { useState } from "react";
// import getData from "./serp";

const FlightSelect = ({ handleSerpApiCall }) => {
    // State variables to hold the form data
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [textInput1, setTextInput1] = useState("");
    const [textInput2, setTextInput2] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="w-full max-w-md border-2 my-10 p-10 border-black h-3/5 rounded-3xl">
                <h2 className="mb-4 text-3xl">Select Flight</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="textInput1"
                            className="block mb-2"
                        >
                            From:
                        </label>
                        <input
                            type="text"
                            id="textInput1"
                            placeholder="Departure"
                            value={textInput1}
                            onChange={(e) => setTextInput1(e.target.value)}
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="textInput2"
                            className="block mb-2"
                        >
                            To:
                        </label>
                        <input
                            type="text"
                            id="textInput2"
                            placeholder="Destination"
                            value={textInput2}
                            onChange={(e) => setTextInput2(e.target.value)}
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="startDate"
                            className="block mb-2"
                        >
                            Departure Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="endDate"
                            className="block mb-2"
                        >
                            Arrival Date:
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FlightSelect;
