import {arr} from './script2.js';
console.log(arr)
const btn= document.querySelector(".btn");
const nav= document.querySelector("#nv");
console.log(nav)
nav.addEventListener('click', function(){
    console.log(nav)
    nav.style.color = 'pink'
})
const popUp= document.querySelector(".pop-up")
const btnAdd=document.querySelector(".btn-add");
const form= document.querySelector(".add-post-form");
const body=document.querySelector(".left");
let title=document.querySelector("#title");
let imageUrl=document.querySelector("#image-url");
let discription= document.querySelector("#discription");
function updateDom(title,imageUrl,discription){
    console.log(title,imageUrl, discription)
    let div=document.createElement("div");
    div.classList.add("left-container");
    div.innerHTML=` <h1 class="title">${title}</h1>
    <img src="${imageUrl}" alt="" class="image-url">
    <p>
        ${discription} 
    </p>
    <button>Delete</button>`
    body.appendChild(div);
    // title="";
    // imageUrl="";
    // discription="";

}
btn.addEventListener("click", function(){
       popUp.classList.toggle("hide");
})
btnAdd.addEventListener("click",function(){
    popUp.classList.toggle("hide");
})
form.addEventListener("submit", function(ev){


let title=document.querySelector("#title");
let imageUrl=document.querySelector("#image-url");
let discription= document.querySelector("#discription");
    ev.preventDefault();
    console.log(title);
    title=title.value ;
    imageUrl=imageUrl.value;
    discription=discription.value;

    updateDom(title,imageUrl,discription);
     
})


