import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="bg-transparent">
            <nav
                className="px-12 py-5 h-20"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <div>
                    <h1 className="text-2xl font-bold">WANDER WISE</h1>
                </div>
                <ul className="navbar-list flex gap-7">
                    <NavLink
                        to="/"
                        className="navbar-link home-link"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="navbar-link contact-link"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="navbar-link about-link"
                    >
                        About
                    </NavLink>
                </ul>
                <div className="">
                    <button className="px-4 py-1 bg-transparent text-black border-2 border-white rounded-3xl w-24">
                        Login
                    </button>
                    <button className="px-4 py-1 bg-transparent text-black border-2 border-white rounded-3xl w-24">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
};
