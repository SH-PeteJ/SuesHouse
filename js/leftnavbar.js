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
document.getElementById("saveResponse").addEventListener("click", function () {
  const name = document.getElementById("userName").value;
  const menuChoice = document.getElementById("userRole").value;

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScWYxeyTjufh9Tgf7jZGTDYlFA9m7xMcqgkTWkheNDPSYxolg/formResponse";

  const formData = new FormData();

  formData.append("entry.1247776806", name);
  formData.append("entry.2116715699", menuChoice);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });

  // Close the Bootstrap modal
  const modalElement = document.getElementById("testModal");
  const modal = bootstrap.Modal.getInstance(modalElement);

  if (modal) {
    modal.hide();
  }
});