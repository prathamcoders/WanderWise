import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.serpapi.com/search?q=example&engine=google&gl=us&api_key=YOUR_API_KEY`
                );
                setSearchResults(response.data.organic_results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Search Results</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            <a href={result.link}>{result.title}</a>
                            <p>{result.snippet}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchResults;
