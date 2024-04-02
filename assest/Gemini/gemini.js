const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
let displayContainer = document.getElementById("displayContainer");
let count =1;
const formElement = document.getElementById("formElement");

import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
let divBotheight;

async function run() {
    // adding style to displayContainer
  displayContainer.style.alignItems = "start";


  //   creating user div and attaching msg
    let divUser = document.createElement("div");
    divUser.style.marginTop = "5px";
    divUser.classList.add("flex", "gap-4");
    divUser.innerHTML = `
    <img class="w-[30px] h-[30px] rounded-full hover:cursor-pointer" src="passport size.png" alt="" sizes="" srcset="">
    <div class=" flex justify-center items-center text-white bg-[rgb(30,31,32)] px-[20px] py-[10px] rounded-lg">${searchBox.value}</div>
    `
    displayContainer.append(divUser);
    divBotheight = Number(displayContainer.clientHeight)  - Number(divUser.clientHeight);
    window.scrollTo(0,divBotheight);

    
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = searchBox.value;
    searchBox.value = "" ;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  

    const md = window.markdownit(); 

    let divBot = document.createElement("div");
    divBot.style.display = "flex";
    divBot.style.justifyContent = "center";;
    divBot.style.marginTop = "5px";
    divBot.style.marginBottom = "15px";
    divBot.classList.add("flex", "gap-4");

    divBot.innerHTML = `
    <img class="w-[30px] h-[30px] rounded-full hover:cursor-pointer rotate-center" src="gemini_favicon.png" alt="" sizes="" srcset="">
    <div class=" text-white bg-[rgb(30,31,32)] px-[20px] py-[10px] rounded-lg">${md.render(text)}</div>
    `
    displayContainer.append(divBot);
    
    divBotheight = Number(displayContainer.clientHeight) - Number(divBot.clientHeight);
    window.scrollTo(0,divBotheight );
}

// search Button click event 
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(count === 1){
    displayContainer.innerText = "";  
    count++;
    }
    run();
})
 
formElement.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(count === 1){
        displayContainer.innerText = "";  
        count++;
    }
    run();
})


let geminiBox = document.getElementById("geminiBox");
let geminBoxContainer = document.getElementById("geminBoxContainer");
let geminiBoxFlag = false;

geminiBox.addEventListener("click",()=>{
    if(!geminiBoxFlag){
        geminBoxContainer.style.display = "block";
        geminiBoxFlag = true;
    }else{
        geminBoxContainer.style.display = "none";
        geminiBoxFlag = false; 
    }
})    

const left_header = document.getElementById("left_header");

let left_header_container = document.getElementById("left_header_container");

let left_header_container_width  = left_header_container.style.width;

let wider_left_header_content = document.querySelectorAll(".wider_left_header_content");
let fixedBars = document.getElementsByClassName("fixedBars")[0];
let fixedBars_footer = document.getElementsByClassName("fixedBars")[1];


let left_header_flag = true;
left_header.addEventListener("click",()=>{
    if(!left_header_flag){
        left_header_container.style.width = "172px"
        
        fixedBars.style.width = "calc(100% - 172px)"
        
        setTimeout(()=>{
            wider_left_header_content.forEach(element => {
            element.style.display = "block";
        });
       },1050);

        geminiBox.style.marginLeft = "0px"
        geminBoxContainer.style.left = "15px"
        left_header_flag = true;

    }else{
        left_header_flag = false;
        
            geminiBox.style.marginLeft = "-90px"
            geminBoxContainer.style.left = "-75px"
            left_header_container.style.width = "70px"
            fixedBars.style.width = "calc(100% - 70px - 102px)"
            wider_left_header_content.forEach(element => {
            element.style.display = "none";
            });
        
    }
})


// let apiKey = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";

let inputImage = document.getElementById("inputImage");
let iconInputImageBtn = document.getElementById("iconInputImageBtn");

iconInputImageBtn.addEventListener("click",()=>{
    inputImage.click();
})

// inputImage.addEventListener("change",()=>{
//     const files = inputImage.files;
//     // console.log(files);
// })