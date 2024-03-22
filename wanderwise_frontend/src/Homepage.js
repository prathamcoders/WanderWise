import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BG from "../../wanderwise_frontend/src/Assets/beach.jpg";
import { Navbar } from "./components/Navbar";

const Homepage = () => {
    return (
        <>
            <div
                className="px-[10%] flex justify-start items-center h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${BG})` }}
            >
                <div className="px-5 min-w-[500px]">
                    <h1 className="text-7xl font-black py-4">
                        Trip Planner
                        <br /> makes easy
                    </h1>
                    <p className="text-md py-4 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Asperiores commodi voluptatibus <br />
                        eius harum minus, ipsam quasi quo impedit sunt quam{" "}
                        <br />
                        nobis dicta nihil nemo, iste ipsum consequuntur nam
                        accusamus quae.
                    </p>
                    <div className="flex py-4 gap-7">
                        <Link to="/destinationselectpage">
                            <button className="px-4 py-2 bg-blue-400 rounded-3xl">
                                Plan Trip
                            </button>
                        </Link>
                        <button className="border-black border-solid border-2 px-4 py-2 rounded-3xl ">
                            How it Works
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
