// JavaScript script file (scripts.js)

// Function to set stroke-dasharray based on percentage
function setPieChartPercentage(circle, percentage) {
    const circumference = 2 * Math.PI * 25; // Circumference of the circle (r = 25)
    const offset = circumference * (1 - percentage / 100); // Calculate the offset for the stroke-dasharray
    circle.setAttribute('stroke-dasharray', `${circumference - offset} ${offset}`); // Set the dasharray
    circle.setAttribute('transform', 'rotate(-90 25 25)'); // Rotate to start from the top
}

document.addEventListener('DOMContentLoaded', function() {
    // Set the pie chart percentage for accuracy
    const accuracyCircle = document.querySelector('.accuracy-circle');
    setPieChartPercentage(accuracyCircle, 75); // Set to 75%

    // Set the pie chart percentage for failed alerts
    const failedCircle = document.querySelector('.failed-circle');
    setPieChartPercentage(failedCircle, 12); // Set to 25%

    // Optional: Add hover animations
    const circles = document.querySelectorAll('.pie-chart svg circle');
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.setAttribute('stroke-width', 12); // Increase stroke width on hover
        });

        circle.addEventListener('mouseleave', function() {
            this.setAttribute('stroke-width', 8); // Restore stroke width
        });
    });
});