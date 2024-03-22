import React from "react";

const SingleDestinationPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img
                src="your_image_url.jpg"
                alt="Your image"
                className="w-90p h-auto"
            />
            <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Button 1
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Button 2
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Button 3
                </button>
            </div>
            <p className="mt-8 text-center">
                Your text goes here. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
        </div>
    );
};

export default SingleDestinationPage;
