const API_KEY =  'M2LK7TBTRG91HN1W';


function init() {
    loadCourse();
}


async function loadCourse() {
    let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CHF&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let currentCourse = Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    console.log(currentCourse);

    document.getElementById('course').innerHTML = `<b>${currentCourse} CHF</b>`;
}