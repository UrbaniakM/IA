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

function checkEmailRegEx(str) {
    var email = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if (email.test(str))
        return true;
    else {
        alert("Podaj właściwy e-mail");
        return false;
    }
}

function checkZIPCodeRegEx(str){
    let errorSpan = document.getElementById("kod");
    let zipCode = /[0-9][0-9]\-[0-9]{3}/;
    if (zipCode.test(str)) {
        errorSpan.innerHTML = "Dobrze";
        errorSpan.className = "green";
        return true;
    }
    else {
        errorSpan.innerHTML = "Źle";
        errorSpan.className = "red";
        return false;
    }
}

function setWrongClass(formularz){
    for(let i = 0; i < formularz.length-2; i++){
        formularz[i].className = "wrong";
    }
}

function validate(formularz){
    let f_imie = formularz.elements["f_imie"];
    let f_nazwisko = formularz.elements["f_nazwisko"];
    let f_emailValue = formularz.elements["f_email"].value;
    let f_kodValue = formularz.elements["f_kod"].value;
    let f_ulica = formularz.elements["f_ulica"];
    let f_miasto = formularz.elements["f_miasto"];
    if(!checkStringAndFocus(f_imie, "Podaj imie!")){
        setWrongClass(formularz);
        return false;
    }
    if(!checkStringAndFocus(f_nazwisko, "Podaj nazwisko!")){
        setWrongClass(formularz);
        return false;
    }
    if( !checkEmailRegEx(f_emailValue) ){
        setWrongClass(formularz);
        return false;
    }
    if(!checkZIPCodeRegEx(f_kodValue)){
        setWrongClass(formularz);
        return false;
    }
    if(!checkStringAndFocus(f_ulica, "Podaj ulice!")){
        setWrongClass(formularz);
        return false;
    }
    if(!checkStringAndFocus(f_miasto, "Podaj miasto!")){
        setWrongClass(formularz);
        return false;
    }
    return true;
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}

function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}

function swapRows(b) {
    var tab = prevNode(b.previousSibling);
    var tBody = nextNode(tab.firstChild);
    var lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    var firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script running");
    const formularz = document.getElementsByTagName("form")[0];
    let button = formularz[formularz.length - 1];

    const trNodes = document.getElementsByTagName("tr");
    alterRows(1, trNodes[0]);

});
