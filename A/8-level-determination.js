// Level Determination

let studentScore = +prompt("Please enter your score: ");

//Calculation

//Way 1

// if (studentScore < 12 && studentScore >= 1) {
//   console.log("Your Grade: C");
// }
// else if (studentScore >=12 && studentScore < 15) {
//   console.log("Your Grade: B")
// }
// else if (studentScore >=15 && studentScore <= 20) {
//   console.log("Your Grade: A")
// }
// else {
//   console.log("The entered score: " + studentScore + "\n" + "Score is invalid.")
// }

//Way 2

// if (studentScore > 20) {
//   alert("The entered score is invalid.");
// } else {
//   if (studentScore >= 15) {
//     alert("Your Grade: A");
//   } else if (studentScore >= 12) {
//     alert("Your Grade: B");
//   } else {
//     if (studentScore <= 0) {
//       alert("The entered score is invalid.");
//     }else {
//       alert("Your Grade: C")
//     }
//   }
// }

//Way 3
// It's fully validated.

let isNotValid = isNaN(studentScore);
if (isNotValid === true) {
  alert("The entered score can nat be a string.");
}
else {
  if (studentScore > 20) {
  alert("The score entered must be between 1 and 20.");
  }
  else if (studentScore >= 15) {
    alert("Your Grade: A");
  } else if (studentScore >= 12) {
    alert("Your Grade: B");
  } else {
    if (studentScore <= 0) {
      alert("The score entered must be between 1 and 20.");
    }else {
      alert("Your Grade: C")
    }
  }
}