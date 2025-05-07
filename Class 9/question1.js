let selectedRating = 0;

function handleStar(event) {
  if (event.target.classList.contains("star")) {
    const id = event.target.getAttribute("data-index");
    selectedRating = id;
  }
  updateRatings(selectedRating);
  rating.textContent = selectedRating;
}

function updateRatings(selectedRating) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, idx) => {
    if (idx < Number(selectedRating)) {
      star.classList.add("star-filled");
    } else {
      star.classList.remove("star-filled");
    }
  });
}

function handleHover(event) {
  if (event.target.classList.contains("star")) {
    const id = event.target.getAttribute("data-index");
    updateRatings(id);
  }
}

function handleLeave() {
  updateRatings(selectedRating);
}

const rating = document.querySelector("#count");
const starRef = document.querySelector("#star-container");
starRef.addEventListener("click", handleStar);
starRef.addEventListener("mouseover", handleHover);
starRef.addEventListener("mouseleave", handleLeave);
