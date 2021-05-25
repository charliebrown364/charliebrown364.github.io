function myFunction() {
    
    var x = document.getElementById("one");

    switch(x.style.color) {
        case '':
        case "blue":
            x.style.color = "red";
            break;
        case "red":
            x.style.color = "blue";
            break;
    }
    
}