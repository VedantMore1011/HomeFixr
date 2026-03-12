/* BOOKING SYSTEM  */

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

/* Welcome Message */
function welcomeMessage() {
  alert("Welcome to HomeFixr 🏠 Your Trusted Home Services Partner!");
  updateBookings();
}

/* Add Booking */
function addBooking(service) {
  bookings.push(service);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert(service + " has been added to your bookings!");
  updateBookings();
}

/* Update Bookings Panel */
function updateBookings() {
  let count = document.getElementById("bookingCount");
  let list = document.getElementById("bookingItems");

  if (count) {
    count.innerText = bookings.length;
  }

  if (!list) return;

  list.innerHTML = "";

  bookings.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span>${item}</span>
      <button class="remove-btn" onclick="removeBooking(${index})">Remove</button>
    `;
    list.appendChild(li);
  });
}

/* Remove a Booking  */
function removeBooking(index) {
  bookings.splice(index, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  updateBookings();
}

/* Clear All Bookings */
function clearBookings() {
  bookings = [];
  localStorage.removeItem("bookings");
  updateBookings();
}

/* Toggle Bookings Panel */
function toggleBookings() {
  document.getElementById("bookingPanel").classList.toggle("active");
}

/* SERVICE DETAILS TOGGLE */

function toggleDetails(id) {
  let allDetails = document.querySelectorAll(".details");

  allDetails.forEach(section => {
    if (section.id !== id) {
      section.style.display = "none";
    }
  });

  let current = document.getElementById(id);
  if (current.style.display === "block") {
    current.style.display = "none";
  } else {
    current.style.display = "block";
  }
}

/* CONTACT FORM */

var form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let service = document.getElementById("service");
    let serviceText = service ? service.options[service.selectedIndex].text : "General Enquiry";

    alert("Thank you " + name + "! Your booking request for '" + serviceText + "' has been submitted successfully. We will contact you shortly.");

    this.reset();
  });
}

/* PAGE LOAD */

window.onload = function() {
  welcomeMessage();
  updateBookings();
}
