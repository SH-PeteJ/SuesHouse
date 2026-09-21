fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading the navigation:", error);
  });

const modalElement = document.getElementById("testModal");

if (modalElement) {
  const testModal = new bootstrap.Modal(modalElement);

  window.addEventListener("DOMContentLoaded", () => {
    testModal.show();
  });

  const saveButton = document.getElementById("saveResponse");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      const nameInput = document.getElementById("userName");
      const roleSelect = document.getElementById("userRole");

      const name = nameInput ? nameInput.value : "";
      const menuChoice = roleSelect ? roleSelect.value : "";

      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScWYxeyTjufh9Tgf7jZGTDYlFA9m7xMcqgkTWkheNDPSYxolg/formResponse";

      const formData = new FormData();

      formData.append("entry.1247776806", name);
      formData.append("entry.2116715699", menuChoice);

      fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      const modal = bootstrap.Modal.getInstance(modalElement);

      if (modal) {
        modal.hide();
      }
    });
  }
}
