function calcLove () {
    // First form's value
    const person1 = document.getElementById("input1").value;

    // Second form's value
    const person2 = document.getElementById("input2").value;

    console.log("You are " + person1 + " and your crush is " + person2);

    // Finding a random number and outputting it to the #result HTML.
    let percentFinder = Math.random();
        percentFinder = Math.floor(percentFinder * 100) + 1;

    result = document.querySelector("#result");
    
    result.innerHTML = "Hey " + person1 + "! The love percentage for you and " + person2 + " is <span>" + percentFinder + "%</span>!";

}

