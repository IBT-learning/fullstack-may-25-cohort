const main = document.getElementById("main-one");
const btn = document.getElementById("btn");
const boxElements = document.getElementsByClassName("box");
const para = document.getElementsByTagName("p");
const mainQuery = document.querySelector("#main-one");
const logo = document.querySelector("#logo");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const addElem = document.getElementById("add-elem");
const removeElem = document.querySelector("#remove-elem");
const home = document.getElementById("home");
const attrContainer = document.querySelector(".attr-section");
const attrBtn = document.querySelector("#attr-btn");

function addClass(){
    main.classList.add("main-container")
}

const changeFontColor = () => {
    for(let i=0; i<para.length; i++){
        para[i].classList.toggle("toggle-color")
        // console.log(`element at pos ${i+1} is : `, para[i])
    }
}

const changeLogoText = () => {
    let content = logo.innerHTML;
    console.log(content)
}

const changeNavStyle = () => {
    nav.style.backgroundColor = "blue"
}

let li;
const addNavItem = () => {
     li = document.createElement("li");
    // li.textContent = "Services";
    li.innerHTML = "<a>Services</a>"
    navList.appendChild(li);
}

const removeNavItem = () => {
    navList.removeChild(home);
    btn.removeEventListener("click", changeNavStyle)
}

const changeAttrSectionStyle = () => {
    // attrContainer.setAttribute("class", "attr-section kit");
    attrContainer.removeAttribute("id")
}

btn.addEventListener("click", changeNavStyle);
addElem.addEventListener("click", addNavItem);
removeElem.addEventListener("click", removeNavItem);

attrBtn.addEventListener("click", changeAttrSectionStyle)


// removeElem.onclick = removeNavItem

// console.log(mainQuery)