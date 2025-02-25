const file_input = document.getElementById("file_input");
const custom_file_input = document.querySelector(
  ".custom__input__file .upload__image"
);
const img_input = document.querySelector(".upload__image");
const view__img_container = document.querySelector(".view__image");
const upload__image = document.querySelector(".upload__image");
const remove_img = document.querySelector(".remove_img");
const change_img = document.querySelector(".change_img");
const generate_ticket = document.querySelector(".btn-ticket");
const ticket_container = document.querySelector(".ticket__container");
const form = document.querySelector(".form");
var uploaded_image = "";

custom_file_input.addEventListener("click", () => {
  file_input.click();
});

file_input.addEventListener("change", () => {
  view__img_container.style.display = "flex";
  img_input.style.display = "none";
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    var view__image = document.querySelector(".view__image .image");
    view__image.style.backgroundImage = `url("${uploaded_image}")`;
  });
  reader.readAsDataURL(file_input.files[0]);
});

remove_img.addEventListener("click", () => {
  img_input.style.display = "flex";
  view__img_container.style.display = "none";
});

change_img.addEventListener("click", () => {
  file_input.click();
});

generate_ticket.addEventListener("click", (e)=>{
  e.preventDefault();
  ticketGenerator()
});

function ticketGenerator(){
  window.location.href = "assets/ticket.html"
    const user_name = document.getElementById("u-name");
    const user_github = document.getElementById("u-github");
    const user_email = document.getElementById("u-email");
}