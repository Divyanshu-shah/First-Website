
document.getElementById("bookingForm").addEventListener("submit", function(event) {
event.preventDefault(); // prevent page reload
alert("🎟️ Your ticket has been booked successfully!");
this.reset(); // reset form fields
}); 