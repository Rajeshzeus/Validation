var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "RajeshV" && password == "Rajesh@007") {
    alert("Login successfully");
    window.location = "https://en.wikipedia.org/wiki/Love_Today_(2022_film)";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
