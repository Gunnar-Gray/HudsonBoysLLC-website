const carouselIndicators = document.getElementById("carouselIndicators");
const numberOfSlides = 3;

for (let i = 0; i < numberOfSlides; i++) {
  const indicator = document.createElement("li");
  indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
  indicator.setAttribute("data-bs-slide-to", i);
  indicator.setAttribute("aria-label", `Slide ${i + 1}`);

  if (i === 0) {
    indicator.classList.add("active");
    indicator.setAttribute("aria-current", "true");
  }

  carouselIndicators.appendChild(indicator);
}