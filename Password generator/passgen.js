let password = "";

function createYourPass() {
    let input = document.getElementById("input").value;
    let passthing = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$-#";

    if (input >= 5 && input <= 15) {
        password = "";
      for (let i = 0; i < input; i++) {
        password += passthing.charAt(Math.floor(Math.random() * passthing.length));
      }

    document.getElementById("password").innerHTML = "Your new password is: " + "*".repeat(input);
    } else {
        document.getElementById("password").innerHTML = "Input must be between 5 and 15.";
    }
  }

  function showPass () {
   
    document.getElementById("password").innerHTML = "Your new password is: " + password;
  }

  
