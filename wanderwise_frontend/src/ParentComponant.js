import React from "react";
import FlightSelect from "./FlightSelect"; // Import the FlightSelect component
import getData from "./serp";

const ParentComponent = () => {
    // Define the handleSerpApiCall function
    const handleSerpApiCall = (formData) => {
        getData({ ...formData });
    };

    return (
        <div>
            {/* Render the FlightSelect component and pass handleSerpApiCall as a prop */}
            <FlightSelect handleSerpApiCall={handleSerpApiCall} />
        </div>
    );
};

export default ParentComponent;
