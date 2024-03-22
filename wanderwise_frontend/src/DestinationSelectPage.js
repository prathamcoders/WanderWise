import React from "react";
import Bali from "../../wanderwise_frontend/src/Assets/bali.jpg";
import Singapore from "../../wanderwise_frontend/src/Assets/singapore.jpg";
import Rajasthan from "../../wanderwise_frontend/src/Assets/rajasthan.jpg";
import Kerala from "../../wanderwise_frontend/src/Assets/kerala.jpg";
import London from "../../wanderwise_frontend/src/Assets/london.jpg";
import Manali from "../../wanderwise_frontend/src/Assets/manali2.jpg";

const Card = ({ title, content, bgImage }) => {
    return (
        <div
            className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "cente",
                backgroundRepeat: "no-repeat",
                height: "350px",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div className="px-6 py-4 bg-opacity-75">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{content}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Learn More
                </button>
            </div>
        </div>
    );
};

const LayoutWithThreeCards = () => {
    return (
        <>
            <div className="flex-col justify-center items-center h-screen py-14 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                <div className="grid grid-cols-3 gap-4 py-5 px-14">
                    <Card
                        title="Card 1"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        bgImage={Rajasthan} // Provide the path to your image
                    />
                    <Card
                        title="Card 2"
                        content="Praesent vel lorem in diam accumsan vehicula."
                        bgImage={Kerala} // Provide the path to your image
                    />
                    <Card
                        title="Card 3"
                        content="Fusce sit amet libero at odio vehicula bibendum."
                        bgImage={Manali} // Provide the path to your image
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
                        bgImage={London} // Provide the path to your image
                    />
                    <Card
                        title="Card 3"
                        content="Fusce sit amet libero at odio vehicula bibendum."
                        bgImage={Singapore} // Provide the path to your image
                    />
                </div>
            </div>
        </>
    );
};

export default LayoutWithThreeCards;
