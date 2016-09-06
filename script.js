function test() {
  var choice1 = "";
  console.clear();

  if (document.getElementById("paper").checked) {
    choice1 = "paper";
  } else if (document.getElementById("rock").checked) {
    choice1 = "rock";
  } else if (document.getElementById("scissors").checked) {
    choice1 = "scissors";
  }
  else
  {
	  alert("Choose your option.");
	  return false;
  }

  var choice2 = Math.random();

  if (choice2 < 0.34) {
    choice2 = "rock";
  } else if (choice2 <= 0.67) {
    choice2 = "paper";
  } else {
    choice2 = "scissors";
  }

  console.log("Computer: " + choice2);
  console.log("Your choose: " + choice1);

  if (choice1 === choice2) {
    console.log("The result is a tie!");
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      console.log("rock wins");
    } else {
      console.log("paper wins");
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      console.log("paper wins");
    } else {
      console.log("scissors wins");
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      console.log("rock wins");
    } else {
      console.log("scissors wins");
    }
  }

}