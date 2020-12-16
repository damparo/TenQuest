

$(function () {
    
    $("#youranswers").on("submit", function (event) {

    event.preventDefault();

    const yourAnswers = {

    
        ans2:$("#youranswers [id=question2]").val().trim()

    };

    console.log(yourAnswers.ans2);

    // Send the POST request.
    $.ajax("/api/answers", {
        type: "POST",
        data: yourAnswers
    }).then(
        function () {
            console.log("answers saved");

        }
    );





});


});
