document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time in milliseconds
    function updateClock() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        
        const clockElement = document.getElementById('clock');
        clockElement.textContent = `CURRENT UTC TIME: ${hours}:${minutes}:${seconds} `;
    }

    // Update the elements with dynamic data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `CURRENT DAY OF THE WEEK: ${getCurrentDayOfTheWeek()}`;
   /* document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()}`;*/

    // Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
});
