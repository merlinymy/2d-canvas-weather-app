import summaryCardStruc from "./summaryCard.html";

export const newSummaryCardComponent = function (weatherData) {
  const struct = `

    <div class="card-animation">
    </div>
    <div class="card-content">
        <div class="top">
            <div class="name-and-time">
                <div class="location-name bold-grey-shadow">${weatherData.location}</div>
                <div class="time">${weatherData.time}</div>
            </div>
            <div class="current-temp bold-grey-shadow">${weatherData.currentTemp}\u00B0</div>
        </div>
        <div class="bottom">
            <div class="text-summary">${weatherData.currentConditions}</div>
            <div class="temp-wrap bold-grey-shadow">
                <div class="temp-high">H:${weatherData.maxTemp}\u00B0</div>
                <div class="temp-low">L:${weatherData.minTemp}\u00B0</div>
            </div>
        </div>
    </div>
  
  `;
  const component = document.createElement("div");
  component.className = "summary-card";
  component.innerHTML = struct;
  const animationCanvas = component.querySelector(".card-animation");

  return component;
};
