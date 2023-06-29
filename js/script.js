$(document).ready(function() {
    const $startButton = $("#start");
    const $squares = $(".square");

    //listen for clicks on the start button
    $startButton.on("click", function() {
        // alert("Clicked!!");

        setInterval(function() {
            randomSquare();
        }, 3000)
    });
    //when clicked, call a function that selects a random square and turns background green

    //write a fun that randomly selects a square and addsa  aclass to turn background green
    // console.log($startButton)

    function randomSquare() {
        const randomSquare = $squares[Math.floor(Math.random() * $squares.length)];

        $(randomSquare).addClass('green-bg');
        // NOw we want the square to return to original color after 3 seconds
        setTimeout(function() {
            $(randomSquare).removeClass('green-bg');
        }, 3000)
    }

});
