const questionOne = document.querySelector("#question1");
const questionTwo = document.querySelector("#question2");const questionThree = document.querySelector("#question3");
const questionFour = document.querySelector("#question4");
const questionFive = document.querySelector("#question5");
const questionSix = document.querySelector("#question6");
const questionSeven = document.querySelector("#question7");
const questionEight = document.querySelector("#question8");
const questionNine = document.querySelector("#question9");
const questionTen = document.querySelector("#question10");

const saveBtn = document.querySelector("#save");

function displayMessage (type, message) {
    messageAlert.textContent = message;
    messageAlert.setAttribute("class", type);
}



saveBtn.addEventListener("click", function(event){

    event.preventDefault();

    var user = 
    {
        questOne: questionOne.value.trim(),
        questTwo: questionTwo.value.trim(),
        questThree: questionThree.value.trim(),
        questFour: questionFour.value.trim(),
        questFive: questionFive.value.trim(),
        questSix: questionSix.value.trim(),
        questSeven: questionSeven.value.trim(),
        questEight: questionEight.value.trim(),
        questNine: questionNine.value.trim(),
        questTen: questionTen.value.trim(),

    }

    console.log(user);

   
    
    
    localStorage.setItem("user", JSON.stringify(user));

    // if (user.firstName === "") {
    //     displayMessage("error", "First name cannot be blank");
    //   } else if (user.lastName === "") {
    //     displayMessage("error", "Last name cannot be blank");
    //   } else if (user.phoneNumber === "") {
    //     displayMessage("error", "phone number cannot be blank");
    //   } else if (user.email === "") {
    //     displayMessage("error", "email cannot be blank");
    //   } else {
    //     displayMessage("success", "Registered successfully");
    
        
    //         localStorage.setItem("user", JSON.stringify(user));
        
    //       }
          
          
        });
        

//  practice.addEventListener("click",function(event){
//    event.preventDefault();
//    var lastUser = JSON.parse(localStorage.getItem("user"));
   
//    userFirst.textContent = lastUser.firstName;
//    userLast.textContent = lastUser.lastName;
//    userPhone.textContent = lastUser.phoneNumber;
//    userEmail.textContent = lastUser.email;
//  })       
   