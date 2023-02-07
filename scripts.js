// Using window.onload to make sure all DOM objects have loaded before code runs
window.onload = () => {
  // Add event listeners
  let tipBtn = document.getElementById("last");
  tipBtn.addEventListener("click", () => {
    alert("Thank you!");
  });
};
