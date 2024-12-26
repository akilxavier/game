document.getElementById("re").addEventListener("click", function () {
    location.reload();
  });
  
  var num1, num2;

  num1 = Math.floor(Math.random() * 10 + 3);
  num2 = Math.floor(Math.random() * 10);

  function calculate() {
    debugger;
    // Perform arithmetic operations
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; // Handle division by zero

    // Draw the results on the canvas
    let canvas = document.getElementById("resultCanvas");
    let ctx = canvas.getContext("2d");

    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Addition: " + add, 10, 30);
    ctx.fillText("Subtraction: " + sub, 10, 60);
    ctx.fillText("Multiplication: " + mul, 10, 90);
    ctx.fillText("Division: " + div, 10, 120);
  }

  function result() {
    let canvas = document.getElementById("resultCanvas");
    let ctx = canvas.getContext("2d");

    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("First number is: " + num1, 10, 150);
    ctx.fillText("Second number is: " + num2, 10, 180);
  }

  function check() {
    let val1 = document.getElementById("inp1").value;
    let val2 = document.getElementById("inp2").value;

    let canvas = document.getElementById("resultCanvas");
    let ctx = canvas.getContext("2d");

    ctx.font = "16px Arial";
    ctx.fillStyle = "black";

     // Check if input is empty
    if (val1 === "" || val2 === "") {
      alert("Please enter both numbers.");
      return;
    }
  
    if (val1 == num1) {
     document.getElementById("h1").innerHTML ="First number is correct";
     document.getElementById("h1").style.color = "green";
     
    } else {
      document.getElementById("h1").innerHTML = "First number is wrong !";
      document.getElementById("h1").style.color = "red";
    }

    if (val2 == num2) {
      document.getElementById("h2").innerHTML ="second number is correct";
      document.getElementById("h2").style.color = "green";
    } else {
      document.getElementById("h2").innerHTML ="second number is wrong!";
      document.getElementById("h2").style.color = "red";
    }

   
  }