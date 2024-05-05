// JavaScript script file (scripts.js)

// Create a line chart for detected falls
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('fallChart').getContext('2d'); // Get the canvas context

    var fallChart = new Chart(ctx, {
        type: 'line', // Line chart
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], // Days of the month
            datasets: [
                {
                    label: 'This Month',
                    data: [10, 15, 20, 12, 14, 17, 19, 22, 25, 18, 16, 19, 20, 22], // Example data points
                    borderColor: 'black', // Solid black line
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Transparent background for fill
                    fill: true, // Fill under the line
                    borderWidth: 2, // Line thickness
                    pointRadius: 5, // Point size
                    pointBackgroundColor: 'black', // Point color
                },
                {
                    label: 'Last Month',
                    data: [8, 10, 12, 9, 11, 14, 16, 18, 20, 17, 15, 13, 12, 18], // Example data points
                    borderColor: 'pink', // Pink line
                    borderDash: [5, 5], // Dashed line
                    backgroundColor: 'rgba(255, 105, 180, 0.2)', // Transparent background for fill
                    fill: true, // Fill under the line
                    borderWidth: 2, // Line thickness
                    pointRadius: 5, // Point size
                    pointBackgroundColor: 'pink', // Point color
                }
            ]
        },
        options: {
            responsive: true, // Responsive design
            scales: {
                x: {
                    display: true, // Display the X-axis
                    title: {
                        display: true, // Axis title
                        text: 'Day of the Month' // Axis title text
                    }
                },
                y: {
                    display: true, // Display the Y-axis
                    title: {
                        display: true,
                        text: 'Number of Falls' // Y-axis title
                    },
                    suggestedMin: 0, // Y-axis minimum value
                    suggestedMax: 25, // Y-axis maximum value
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(tooltipItem) {
                            return 'Detected Falls'; // Tooltip title
                        },
                        label: function(tooltipItem) {
                            return 'Day ' + tooltipItem.label + ': ' + tooltipItem.raw; // Tooltip content
                        }
                    }
                }
            }
        }
    });
});
