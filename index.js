function displayMessage(type, message) {
  $("#msg").text(message);
  $("#msg").attr("class", type);
}

$("#save").on("click", function (event) {
  event.preventDefault();

  var user = {
    questOne: $("#question1").val().trim(),
    questTwo: $("#question2").val().trim(),
    questThree: $("#question3").val().trim(),
    questFour: $("#question4").val().trim(),
  };

  console.log(user);

  if (user.questOne === "") {
    displayMessage("error", "question cannot be blank");
  } else if (user.questTwo === "") {
    displayMessage("error", "question cannot be blank");
  } else if (user.questThree === "") {
    displayMessage("error", "question cannot be blank");
  } else if (user.questFour === "") {
    displayMessage("error", "question cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
  }

  localStorage.setItem("user", JSON.stringify(user));
});



       


