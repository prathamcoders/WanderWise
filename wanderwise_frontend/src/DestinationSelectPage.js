import React from "react";
import Bali from "../../wanderwise_frontend/src/Assets/bali.jpg";
import Paris from "../../wanderwise_frontend/src/Assets/paris.jpg";
import Dubai from "../../wanderwise_frontend/src/Assets/dubai.jpg";
import Singapore from "../../wanderwise_frontend/src/Assets/singapore.jpg";

const Card = ({ title, content, bgImage }) => {
    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "cente",
                backgroundRepeat: "no-repeat",
                height: "350px",
                width: "400px",
            }}
        >
            <div className="px-6 py-4 bg-opacity-75">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{content}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </button>
            </div>
        </div>
    );
};

const LayoutWithThreeCards = () => {
    return (
        <div className="flex-col justify-center items-center h-screen py-14 bg-cyan-800">
            <div className="grid grid-cols-3 gap-4 py-5 px-14">
                <Card
                    title="Card 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImage={Bali} // Provide the path to your image
                />
                <Card
                    title="Card 2"
                    content="Praesent vel lorem in diam accumsan vehicula."
                    bgImage={Paris} // Provide the path to your image
                />
                <Card
                    title="Card 3"
                    content="Fusce sit amet libero at odio vehicula bibendum."
                    bgImage={Dubai} // Provide the path to your image
                />
            </div>{" "}
            <div className="grid grid-cols-3 gap-4 py-5 px-14">
                <Card
                    title="Card 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImage={Bali} // Provide the path to your image
                />
                <Card
                    title="Card 2"
                    content="Praesent vel lorem in diam accumsan vehicula."
                    bgImage={Paris} // Provide the path to your image
                />
                <Card
                    title="Card 3"
                    content="Fusce sit amet libero at odio vehicula bibendum."
                    bgImage={Dubai} // Provide the path to your image
                />
            </div>
        </div>
    );
};

export default LayoutWithThreeCards;
