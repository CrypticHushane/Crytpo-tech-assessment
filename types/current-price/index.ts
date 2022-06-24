// To specify the type of the variables and object properties the API returns 
// and I  and want to display, I created a type file for each API endpoint.

//Here is the type file for the API endpoint: https://api.abyiss.com/v1/{exchanges}/{market}/currentprice?apiKey=^

export type CurrentPrice = {
    exchange: string,
    market: string,
    timestamp: string,
    price: number,
} 