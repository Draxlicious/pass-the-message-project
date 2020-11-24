
const form = document.querySelector("#message-form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if(message.value === ""){
        feedback.classList.add("show")
        setTimeout(()=>{
            feedback.classList.remove("show")
        },2000)
    }else{
        messageContent.innerHTML = message.value
        message.value = ""
    }

})

// let form = document.querySelector("#message-form")
// let nameInput = document.querySelector("#message")
// let feedback = document.querySelector(".feedback")
// let message = document.querySelector(".message-content")

// form.addEventListener("submit", function(e){
// e.preventDefault();

// if(nameInput.value === ""){
//     feedback.classList.add("show")
//     setTimeout(() => {
//         feedback.classList.remove("show")
//     }, 2000);
// }else{
//     message.innerHTML = nameInput.value
//     nameInput.value = "";
// }

// })


    
