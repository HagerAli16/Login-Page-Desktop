// const loginBtn =document.querySelector("#login-btn");
// const registerBtn =document.querySelector("#register-btn");
// const loginIconBtn =document.querySelector("#login-icon-btn");
// const registerIconBtn =document.querySelector("#register-icon-btn");

// const loginForm =document.querySelector(".login-container");
// const registerForm =document.querySelector(".register-container");

// const shape =document.querySelector("#shape");

// function viewlogin(){
//     loginForm.style.right="0";
//     registerForm.style.left="100%"; 

//     loginForm.style.opacity="1";
//     registerForm.style.opacity="0"; 

//     shape.classList.add("shape-animate");
// }

// function viewregister(){
//     loginForm.style.right="100%";
//     registerForm.style.left="0";
    
//     loginForm.style.opacity="0";
//     registerForm.style.opacity="1"; 

//     shape.classList.add("shape-animate");
// }

// registerBtn.addEventListener('click' ,viewregister);
// loginBtn.addEventListener('click' ,viewlogin);
// registerIconBtn.addEventListener('click' ,viewregister);
// loginIconBtn.addEventListener('click' ,viewlogin);

//     shape.addEventListener('animationend' ,() =>{
//         shape.classList.remove("shape-animate"); 
//     });




const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
const loginIconBtn = document.querySelector("#login-icon-btn");
const registerIconBtn = document.querySelector("#register-icon-btn");

const loginForm = document.querySelector(".login-container");
const registerForm = document.querySelector(".register-container");

const shape = document.querySelector("#shape");

function viewlogin() {
    loginForm.style.right = "0";
    registerForm.style.left = "100%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    shape.classList.add("shape-animate");
}

function viewregister() {
    loginForm.style.right = "100%";
    registerForm.style.left = "0";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    shape.classList.add("shape-animate");
}

registerBtn.addEventListener('click', viewregister);
loginBtn.addEventListener('click', viewlogin);
registerIconBtn.addEventListener('click', viewregister);
loginIconBtn.addEventListener('click', viewlogin);

shape.addEventListener('animationend', () => {
    shape.classList.remove("shape-animate");
});
