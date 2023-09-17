function calcLove () {
    // First form's value
    const person1 = document.getElementById("input1").value;

    // Second form's value
    const person2 = document.getElementById("input2").value;
    const emptyString = "";

    if(person1 ===  emptyString || person2 === emptyString) {
        alert("Please enter both names.") 
        return ;
    } else {

    // Finding a random number and outputting it to the #result HTML.
    let percentFinder = Math.random();
        percentFinder = Math.floor(percentFinder * 100) + 1;

    result = document.querySelector("#result");
    
    result.innerHTML = "Hey " + person1 + "! The love percentage for you and " + person2 + " is <span>" + percentFinder + "%</span>!";
}
}

document.querySelector("#hiddenEditor").addEventListener("click", openEditor);

function openEditor(){
    
    result.innerHTML = "<textarea placeholder='I heard you like this font. Go head, type something. :D'></textarea>";
}