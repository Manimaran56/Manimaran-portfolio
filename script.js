document.getElementById("know-button").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("downloadbutton")
  .addEventListener("click", function () {
    const fileUrl = "MANIMARAN S RESUME.pdf";
    const fileName = "MANIMARAN S RESUME.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
    link.remove();
  });

document.querySelector(".logo").addEventListener("click", function () {
  document
    .getElementById("landing-page")
    .scrollIntoView({ behavior: "smooth" });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function sendMail() {
  let parms = {
    name: document.getElementById("formname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_nr4e7bz", "template_kcm6plk", parms)
    .then(alert("Your Message has been sent to my Email!!"));
}
