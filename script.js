document.addEventListener("DOMContentLoaded", function () {
  // Display submitted data when the page loads
  displaySubmittedData();

  // Add submit event listener to the form
  document.querySelector(".comment-form").addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    let category = document.getElementById("category").value;
    let comments = document.getElementById("comments").value;

    // Check if the category is selected
    if (category === "") {
      alert("Please select a category");
      return;
    }

    // Create an object based on the form data
    let formData = {
      category: category,
      comments: comments,
    };

    // Save the form data to local storage
    saveDataToLocalStorage(formData);

    // Clear the form fields
    clearFormFields();

    // Refresh the displayed data
    displaySubmittedData();
  });
});

// Save data to local storage
function saveDataToLocalStorage(data) {
  let submittedArray = JSON.parse(localStorage.getItem("submittedData")) || [];
  submittedArray.push(data);
  localStorage.setItem("submittedData", JSON.stringify(submittedArray));
}

// Display submitted data on the page
function displaySubmittedData() {
  const submittedData = JSON.parse(localStorage.getItem("submittedData")) || [];
  const displayArea = document.getElementById("submittedData");

  displayArea.innerHTML = ""; // Clear previous display

  submittedData.forEach((entry) => {
    const newData = document.createElement("div");
    newData.classList.add("comment-entry");
    newData.innerHTML = `<strong>Category:</strong> ${entry.category}<br><strong>Comments:</strong> ${entry.comments}`;
    displayArea.appendChild(newData);
  });
}

// Clear form fields
function clearFormFields() {
  document.getElementById("category").value = "";
  document.getElementById("comments").value = "";
}
