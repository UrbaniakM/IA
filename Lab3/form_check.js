function isEmpty(text){
    if(text){
        return false;
    }
    return true;
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}

var errorField = "";

function startTimer(fName) {
    errorField = fName;
    window.setTimeout("clearError(errorField)", 5000);
}

function clearError(objName) {
    document.getElementById(objName).innerHTML = "";
}

function checkString(text, message) {
    if( isEmpty(text) || isWhiteSpace(text) ){
        alert(message);
        return false;
    }
    return true;
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        startTimer(errorFieldName);
        return false;
    }
    else {
        return true;
    }
}

function checkEmail(str) {
    if (isWhiteSpace(str)) {
        alert("Podaj właściwy e-mail");
        return false;
    }
    else {
        var at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        }
        else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") {
                    l = i;
                }
            }
            if ((l < (at + 2)) || (l == str.length - 1)) {
                alert("Nieprawidłowy e-mail");
                return false;
            }
        }
        return true;
    }
}

function validate(formularz){
    let f_imie = formularz.elements["f_imie"];
    let f_nazwisko = formularz.elements["f_nazwisko"];
    let f_emailValue = formularz.elements["f_email"].value;
    let f_kod = formularz.elements["f_kod"];
    let f_ulica = formularz.elements["f_ulica"];
    let f_miasto = formularz.elements["f_miasto"];
    if(!checkStringAndFocus(f_imie, "Podaj imie!")){
        return false;
    }
    if(!checkStringAndFocus(f_nazwisko, "Podaj nazwisko!")){
        return false;
    }
    if( !checkEmail(f_emailValue) ){
        return false;
    }
    if(!checkStringAndFocus(f_kod, "Podaj kod!")){
        return false;
    }
    if(!checkStringAndFocus(f_ulica, "Podaj ulice!")){
        return false;
    }
    if(!checkStringAndFocus(f_miasto, "Podaj miasto!")){
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script running");
    const formularz = document.getElementsByTagName("form")[0];
    let button = formularz[formularz.length - 1];
});
