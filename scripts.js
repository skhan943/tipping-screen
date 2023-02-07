// Using window.onload to make sure all DOM objects have loaded before code runs
window.onload = () => {
  // Add event listeners
  let smallTip = document.getElementsByClassName("tip-button");
  for (btn of smallTip) {
    console.log(btn);
    if (btn.id) {
      btn.addEventListener("click", () => {
        alert("Thank you!");
      });
    } else {
      btn.addEventListener("click", () => {
        alert("Sorry, that didn't work! Please try again.");
      });
    }
  }
};
