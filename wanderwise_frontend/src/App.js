import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Homepage from "./Homepage";
import DestinationSelectPage from "./DestinationSelectPage";
import ContactUs from "./ContactUs";
import AboutUs from "./About";
import PasswordLoginWithFirebase from "./PasswordLoginFirebase";
import RegisterAndLogin from "./RegisterAndLogin";
import FlightSelect from "./FlightSelect";

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
                    <Route
                        path="/login"
                        element={<PasswordLoginWithFirebase />}
                    ></Route>
                    <Route
                        path="/signup"
                        element={<RegisterAndLogin />}
                    ></Route>
                    <Route
                        path="/FlightSelect"
                        element={<FlightSelect />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
