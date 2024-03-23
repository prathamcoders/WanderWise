import React from "react";
import FlightSelect from "./FlightSelect";
import getJsonData from "./Serp";
const ParentComponent = () => {
    // Function to handle the Serp API call

    const handleSerpApiCall = async (formData) => {
        const { startDate, endDate, textInput1, textInput2 } = formData;
        // Perform the API call using formData
        console.log("Form Data for Serp API:", startDate);
        // Replace this with your actual Serp API call using formData
        // const res = await fetch();
        // console.log(res);
    };

    return (
        <div>
            <FlightSelect handleSerpApiCall={handleSerpApiCall} />
        </div>
    );
};

export default ParentComponent;
