import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Homepage from "./Homepage";
import DestinationSelectPage from "./DestinationSelectPage";
import ContactUs from "./ContactUs";
import AboutUs from "./About";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Homepage />}
                    ></Route>
                    <Route
                        path="/destinationselectpage"
                        element={<DestinationSelectPage />}
                    ></Route>
                    <Route
                        path="/contact"
                        element={<ContactUs />}
                    ></Route>
                    <Route
                        path="/about"
                        element={<AboutUs />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
