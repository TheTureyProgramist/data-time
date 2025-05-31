//Через цю частину коду не працювало
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 11, 2025'),
// });
const selector = document.querySelector("#timer-1");
const targetDate = new Date('Jun 14, 2025');
function updateTimer() {
    const now = new Date();
    const time = targetDate - now;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    document.querySelector('[data-value="days"]').textContent = String(days).padStart(2, '0');
    document.querySelector('[data-value="hours"]').textContent = String(hours).padStart(2, '0');
    document.querySelector('[data-value="mins"]').textContent = String(mins).padStart(2, '0');
    document.querySelector('[data-value="secs"]').textContent = String(secs).padStart(2, '0');
}
updateTimer();
setInterval(updateTimer, 1000);