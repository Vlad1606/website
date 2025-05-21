
function validateForm() {
    let name = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return false;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    alert("Success!");
    return true;
  }
  