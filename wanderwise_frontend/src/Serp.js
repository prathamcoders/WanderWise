const { getJson } = require("serpapi");
export default function getJsonData(
    startDate,
    endDate,
    textInput1,
    textInput2
) {
    getJson(
        {
            api_key:
                "013ecd742b51628216e1b19e1462626ae152012d6fb239a09727be35274a51a1",
            engine: "google_flights",
            hl: "en",
            gl: "us",
            departure_id: textInput1,
            arrival_id: textInput2,
            outbound_date: startDate,
            return_date: endDate,
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
}
