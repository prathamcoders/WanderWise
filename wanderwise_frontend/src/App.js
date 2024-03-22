import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Homepage from "./Homepage";
import DestinationSelectPage from "./DestinationSelectPage";

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
                </Routes>
            </Router>
        </div>
    );
};

export default App;
