// Initialize ratings count: [1-star, 2-star, 3-star, 4-star, 5-star]
let ratings = [0, 0, 0, 0, 0];
let totalRatings = 0;

// Function to update ratings and progress bars
function updateRatings() {
  totalRatings = ratings.reduce((agg, item) => agg + item, 0);

  // Get all range inputs and percentage <p> elements
  const progressBars = document.querySelectorAll(".ratings");
  const percentageTexts = document.querySelectorAll(".percentage");

  // Update each rating bar and its text
  ratings.forEach((count, index) => {
    let percent = totalRatings === 0 ? 0 : (count / totalRatings) * 100;
    progressBars[index].value = percent;
    percentageTexts[index].textContent = `${Math.round(percent)}%`;
  });
}

// Function to handle click events on stars
function handleStarClick(event) {
  if (event.target.classList.contains("star")) {
    const id = Number(event.target.getAttribute("data-id"));

    // Increment count for that rating
    ratings[id - 1]++;
    console.log(ratings);
    // Highlight selected stars
    const starsButton = document.querySelectorAll("#stars button");
    starsButton.forEach((starRef, idx) => {
      if (idx < id) {
        starRef.classList.add("selected");
      } else {
        starRef.classList.remove("selected");
      }
    });

    // Update progress bars and percentages
    updateRatings();
  }
}

// Add event listeners to stars
document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector("#stars");
  starContainer.addEventListener("click", handleStarClick);
});
