const API_KEY =  'M2LK7TBTRG91HN1W';

async function loadCourse() {
    let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CHF&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
}