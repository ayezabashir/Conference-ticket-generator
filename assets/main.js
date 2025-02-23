const file_input = document.getElementById("file_input");
const custom_file_input = document.querySelector(".custom__input__file");
const img_input = document.querySelector(".upload__image");
const view__img_container = document.querySelector(".view__image");
const upload__image = document.querySelector(".upload__image") ;
var uploaded_image = "";

custom_file_input.addEventListener("click", ()=>{
    file_input.click()
})

    
file_input.addEventListener("change",()=>{
    view__img_container.style.display="flex";
    const reader = new FileReader;
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        var view__image = document.querySelector(".view__image .image");
        view__image.style.backgroundImage = `url("${upload__image}")`
    })
    reader.readAsDataURL(this.files[0])
    img_input.style.display="none";

})