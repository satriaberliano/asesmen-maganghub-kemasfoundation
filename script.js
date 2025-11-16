// Button - Alert
const buttonContact = document.getElementById("btn-contact");

function onButtonClickAlert() {
  alert("Terima kasih! Anda dapat menghubungi saya melalui email.");
}

buttonContact.addEventListener("click", onButtonClickAlert);

// Footer
document.getElementById("year-footer").innerHTML = new Date().getFullYear();
