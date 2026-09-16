 fetch("rightnavbar.html")
   .then((response) => response.text())
   .then((data) => {
     document.getElementById("nav-placeholder").innerHTML = data;
   })
   .catch((error) => {
     console.error("Error loading the navigation:", error);
   });