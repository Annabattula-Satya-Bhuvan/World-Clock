function updateClock() {
  const options = { hour12: false };

  document.getElementById("india").textContent =
    new Date().toLocaleTimeString("en-IN", {
      ...options,
      timeZone: "Asia/Kolkata"
    });

  document.getElementById("london").textContent =
    new Date().toLocaleTimeString("en-GB", {
      ...options,
      timeZone: "Europe/London"
    });

  document.getElementById("newyork").textContent =
    new Date().toLocaleTimeString("en-US", {
      ...options,
      timeZone: "America/New_York"
    });
}

setInterval(updateClock, 1000);
updateClock();
