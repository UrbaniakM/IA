function isEmpty(text){
    if(text){
        return true;
    }
    return false;
}

function validate(formularz){
    if(isEmpty(formularz.elements["f_imie"].value)){
        alert("Podaj imie!");
        return false;
    }
    return true;
}

console.log("Script running");
var button = document.getElementsByClassName("confirm-form")[0];
var button = document.querySelectorAll("tr");
console.log(button);