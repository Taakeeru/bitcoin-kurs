const API_KEY =  'M2LK7TBTRG91HN1W';

let months = [
    '2021-02-28',
    '2021-03-31',
    '2021-04-30',
    '2021-05-31',
    '2021-06-30',
    '2021-07-31',
    '2021-08-31',
    '2021-09-30',
    '2021-10-31',
    '2021-11-30',
    '2021-12-31',
    '2022-01-31',
    '2022-02-28',
    '2022-03-31',
    '2022-04-30',
    '2022-05-31',
    '2022-06-30',
    '2022-07-31',
    '2022-08-31',
    '2022-09-30',
    '2022-10-31',
    '2022-11-30',
    '2022-12-31',
    '2023-01-31',
    '2023-02-28',
    '2023-03-31',
    '2023-04-30',
    '2023-05-31',
    '2023-06-30',
    '2023-07-31',
    '2023-08-31',
    '2023-09-30',
    '2023-10-22'
];

let monthlyCourseArray = [];


async function init() {
    await loadExchangeRate();
    await loadMonthlyCourse();
    renderChart();
}


async function loadExchangeRate() {
    let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CHF&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let currentExchangeRate = Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate'])

    document.getElementById('exchange-rate').innerHTML = `<b>${currentExchangeRate} CHF</b>`;
}


async function loadMonthlyCourse() {
    let url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CHF&apikey=${API_KEY}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let monthlyCourse = responseAsJson['Time Series (Digital Currency Monthly)'];

    for (let i = 0; i < months.length; i++) {
        const courseEachMonth = Math.round(monthlyCourse[months[i]]['1a. open (CHF)']);
        monthlyCourseArray.push(courseEachMonth);
    }
}