const { getJson } = require("serpapi");

const getData = ({ textInput1, textInput2, startDate, endDate }) => {
    getJson(
        {
            api_key: "146895db-9b89-4dcd-83d6-be9c29e7a0ec",
            engine: "google_flights",
            hl: "en",
            gl: "us",
            departure_id: { textInput1 },
            arrival_id: { textInput2 },
            outbound_date: { startDate },
            return_date: { endDate },
            currency: "INR",
        },
        (json) => {
            // console.log(json);
            console.log(json.best_flights[0].price);
            console.log(json.best_flights[0].flights[0].departure_airport);
            console.log(json.best_flights[0].flights[0].arrival_airport);
            console.log(json.best_flights[0].total_duration);
            console.log(json.best_flights[0].flights[0].airplane);
            console.log(json.best_flights[0].flights[0].flight_number);
        }
    );
};

export default getData;

// require 'google_search_results'

// params = {
//   engine: "google_flights",
//   departure_id: "PEK",
//   arrival_id: "AUS",
//   outbound_date: "2024-03-24",
//   return_date: "2024-03-30",
//   currency: "USD",
//   hl: "en",
//   api_key: "secret_api_key"
// }

// search = GoogleSearch.new(params)
// hash_results = search.get_hash
