
function renderChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: months,
        datasets: [{
            label: 'Bitcoin Kurs in CHF',
            data: monthlyCourseArray,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}