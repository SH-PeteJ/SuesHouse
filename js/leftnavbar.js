fetch("leftnavbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading the navigation:", error);
  });

const testModal = new bootstrap.Modal("#testModal");

window.addEventListener("DOMContentLoaded", () => {
  testModal.show();
});
