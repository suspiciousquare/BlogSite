function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){

var name = document.contactForm.name.value;
var email = document.contactForm.email.value;
var content = document.contactForm.content.value;

var nameErr = emailErr = contentErr = true;

if (name == ""){
    printError("nameErr", "Please enter your name");
} else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false){
        printError("nameErr","Please enter a valid name");
    } else{
        printError("nameErr","");
        nameErr = false;
    }
}

if (email == ""){
    printError("emailErr", "Please enter your email");
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false){
        printError("emailErr","Please enter a valid email");
    } else{
        printError("emailErr","");
        emailErr = false;
    }
}

if (content == ""){
    printError("contentErr", "Please enter your message");
} else {
    var regex = /^\S$/;
    if (regex.test(content) === false){
        printError("contentErr","Please enter valid message");
    } else{
        printError("contentErr","");
        contentErr = false;
    }
}


if(nameErr == true || emailErr == true || contentErr == true){
    return false;
} else {
    alert('You have submitted the form')
}
}