const questionOne = document.querySelector("#question1");
const questionTwo = document.querySelector("#question2");const questionThree = document.querySelector("#question3");
const questionFour = document.querySelector("#question4");
const questionFive = document.querySelector("#question5");
const questionSix = document.querySelector("#question6");
const questionSeven = document.querySelector("#question7");
const questionEight = document.querySelector("#question8");
const questionNine = document.querySelector("#question9");
const questionTen = document.querySelector("#question10");
const messageAlert = document.querySelector("#msg");

const saveBtn = document.querySelector("#save");


// const showAnswersBtn = document.querySelector("#generate");
// const answer1 = document.querySelector("#answer1");
// const answer2 = document.querySelector("#answer2");
// const answer3 = document.querySelector("#answer3");
// const answer4 = document.querySelector("#answer4");
// const answer5 = document.querySelector("#answer5");
// const answer6 = document.querySelector("#answer6");
// const answer7 = document.querySelector("#answer7");
// const answer8 = document.querySelector("#answer8");
// const answer9 = document.querySelector("#answer9");
// const answer10 = document.querySelector("#answer10");



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

   
    
    
   

    if (user.questOne === "") {
        displayMessage("error", "question cannot be blank");
      } else if (user.questTwo === "") {
        displayMessage("error", "question cannot be blank");
      } else if (user.questThree === "") {
        displayMessage("error", "question cannot be blank");
      }else if (user.questFour === "") {
        displayMessage("error", "question cannot be blank");
      } else if (user.questFive === "") {
        displayMessage("error", "question cannot be blank");
      }else if (user.questSix === "") {
        displayMessage("error", "question cannot be blank");
      } else if (user.questSeven === "") {
        displayMessage("error", "question cannot be blank");
      }else if (user.questEight === "") {
        displayMessage("error", "question cannot be blank");
      } else if (user.questNine === "") {
        displayMessage("error", "question cannot be blank");
      }else if (user.questTen === "") {
        displayMessage("error", "question cannot be blank");
      } else {
        displayMessage("success", "Registered successfully");
    
        
        localStorage.setItem("user", JSON.stringify(user));
        
          }
          
          
        });


// showAnswersBtn.addEventListener("click", function(event){

//     event.preventDefault();


//        var lastUser = JSON.parse(localStorage.getItem("user"));
       
//        answer1.textContent = lastUser.questOne;
//        answer2.textContent = lastUser.questTwo;
//        answer3.textContent = lastUser.questThree;
//        answer4.textContent = lastUser.questFour;
//        answer5.textContent = lastUser.questFive;
//        answer6.textContent = lastUser.questSix;
//        answer7.textContent = lastUser.questSeven;
//        answer8.textContent = lastUser.questEight;
//        answer9.textContent = lastUser.questNine;
//        answer10.textContent = lastUser.questTen;
    

       

// });

