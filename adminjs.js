window.addEventListener('DOMContentLoaded', (event) => {
    const plekkenCounter = document.getElementById('plekken-counter');
    const aantalPlekkenInput = document.getElementById('aantal-plekken');
    const plekkenAanpassenButton = document.getElementById('plekken-aanpassen');
  
    plekkenAanpassenButton.addEventListener('click', () => {
      const nieuweAantalPlekken = parseInt(aantalPlekkenInput.value);
      plekkenCounter.textContent = nieuweAantalPlekken;
      aantalPlekkenInput.value = '';
    });
  });

  function toggleCalendar() {
    var calendar = document.getElementById("calendar");
    if (calendar.style.display === "none") {
        calendar.style.display = "block";
    } else {
        calendar.style.display = "none";
    }
}

function toggleAvailability(element) {
    if (element.classList.contains("available")) {
        element.classList.remove("available");
        element.classList.add("unavailable");
    } else if (element.classList.contains("unavailable")) {
        element.classList.remove("unavailable");
        element.classList.add("available");
    }
}

function toggleCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.classList.toggle("open");
}

function toggleAvailability(element) {
  element.classList.toggle("available");
  element.classList.toggle("unavailable");
}

function toggleAvailability(element) {
  element.classList.toggle("selected");
}
