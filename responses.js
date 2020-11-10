const showAnswersBtn = document.querySelector("#generate");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");
const answer7 = document.querySelector("#answer7");
const answer8 = document.querySelector("#answer8");
const answer9 = document.querySelector("#answer9");
const answer10 = document.querySelector("#answer10");

showAnswersBtn.addEventListener("click", function(event){

    event.preventDefault();


       var lastUser = JSON.parse(localStorage.getItem("user"));
       
       answer1.textContent = lastUser.questOne;
       answer2.textContent = lastUser.questTwo;
       answer3.textContent = lastUser.questThree;
       answer4.textContent = lastUser.questFour;
       answer5.textContent = lastUser.questFive;
       answer6.textContent = lastUser.questSix;
       answer7.textContent = lastUser.questSeven;
       answer8.textContent = lastUser.questEight;
       answer9.textContent = lastUser.questNine;
       answer10.textContent = lastUser.questTen;
    

       

});