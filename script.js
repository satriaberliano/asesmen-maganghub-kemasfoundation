// Button - Alert
const buttonContact = document.getElementById("btn-contact");

function onButtonClickAlert() {
  alert("Terima kasih! Anda dapat menghubungi saya melalui email.");
}

buttonContact.addEventListener("click", onButtonClickAlert);

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

backToTopButton.addEventListener("click", backToTopFunction);

// Footer
document.getElementById("year-footer").innerHTML = new Date().getFullYear();
