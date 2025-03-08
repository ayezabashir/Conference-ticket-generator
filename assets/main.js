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
const error_msg = document.querySelector(".error");
const info_icon = document.getElementById("info_icon");
const emailInput = document.getElementById("u-email");
const invalidMsg = document.querySelector(".email-info")
var uploaded_image = "";

custom_file_input.addEventListener("click", () => {
  file_input.click();
});

file_input.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    if(file_input.files[0].size > 500000){
      error_msg.innerText = "File too large. Please upload a photo under 500KB";
      error_msg.style.color ="#F57463";
      view__img_container.style.display = "none";
      img_input.style.display = "flex";
    }else{
      error_msg.innerText = "Upload your photo (JPG or PNG, max size: 500KB).";
      error_msg.style.color ="#8784a4";
      view__img_container.style.display = "flex";
      img_input.style.display = "none";
      var view__image = document.querySelector(".view__image .image");
      view__image.style.backgroundImage = `url("${uploaded_image}")`;
    }
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

form.addEventListener("submit", (e)=>{
  const user_name = document.getElementById("u-name").value;
  const user_github = document.getElementById("u-github").value;
  const user_email = document.getElementById("u-email").value;
  
  localStorage.setItem("name",user_name);
  localStorage.setItem("github",user_github);
  localStorage.setItem("email",user_email);
  e.preventDefault()
  ticketGenerator()
})

function ticketGenerator(){
  window.location.href = "./assets/ticket.html"
}

emailInput.addEventListener("invalid", function (e) {
  let inputValue = e.target;
  console.log(inputValue.validity);
  if (inputValue.validity.typeMismatch || inputValue.validity.valueMissing) {
    inputValue.setCustomValidity(" ");
    invalidMsg.style.display = 'flex';
    emailInput.style.borderColor = '#F57463';
    emailInput.style.outline = 'none';
  } else {
    invalidMsg.style.display = 'none';
    emailInput.style.outlineStyle = 'solid';
    emailInput.style.borderColor = '#8784a4';
    emailInput.style.outlineColor = '#8784a4';
    emailInput.style.outlineWidth = '2px';
    emailInput.style.outlineOffset = '3px';
  }
});

emailInput.addEventListener("input", function () {
  invalidMsg.style.display = 'none'
  emailInput.style.outlineStyle = 'solid';
  emailInput.style.borderColor = '#8784a4';
  emailInput.style.outlineColor = '#8784a4';
  emailInput.style.outlineWidth = '2px';
  emailInput.style.outlineOffset = '3px';
});
