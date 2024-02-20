let button = document.querySelector("#button");
let postalCode = document.querySelector("#postalcode");
let eMail = document.querySelector("#mail");
let sSNumber = document.querySelector("#socialsecuritynumber");
let passportDate = document.querySelector("#passportdate");
let passportValidity = document.querySelector("#passportvalidity");
let passportNumber = document.querySelector("#passportnumber");
let error = "";


button.addEventListener("click", verifyInput);

function verifyInput(event){
    event.preventDefault();
    let form = document.querySelector("form");

    // Supprimer les span précédemment créés avant de revérifier chaque input
    let errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach(span => span.parentNode.removeChild(span));

    if (!/^\d{5}$/.test(postalCode.value)){
        error = document.createElement("span");
        error.setAttribute("class", "error");
        error.innerText = "Code postal invalide";
        postalCode.parentNode.appendChild(error);
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail.value)){
        error = document.createElement("span");
        error.setAttribute("class", "error");
        error.innerText = "E-mail invalide";
        eMail.parentNode.appendChild(error);
    }
    if (!/^[1-2]{1}\d{12}$/.test(sSNumber.value)){
        error = document.createElement("span");
        error.setAttribute("class", "error");
        error.innerText = "Numéro de Sécurité Sociale invalide";
        sSNumber.parentNode.appendChild(error);
    }
    if (!/^[0-9]{2}[A-Z]{2}[0-9]{5}$/.test(passportNumber.value)){
        error = document.createElement("span");
        error.setAttribute("class", "error");
        error.innerText = "Numéro de passeport invalide.";
        passportNumber.parentNode.appendChild(error); 
    }
    if (passportDate.value>passportValidity.value){
        error = document.createElement("span");
        error.setAttribute("class", "error");
        error.innerText = "Date de validité du passeport incohérente avec la date de délivrance.";
        passportValidity.parentNode.appendChild(error);
    }
    if (error=="") {
        form.submit();
    }
}
