let phoneandtablet = document.querySelector(".phoneandtablet")
let firstsec=document.querySelector(".firstsec")
let isOpenP=false;
phoneandtablet.addEventListener("click", () =>{
    
    if(!isOpenP) {
        firstsec.style.display="flex"
    }else{
        firstsec.style.display="none"
    }
    isOpenP=!isOpenP
})

let watches=document.querySelector(".watches")
let secondsec=document.querySelector(".secondsec")

let isOpenW=false;
watches.addEventListener("click", () =>{
    
    if(!isOpenW) {
        secondsec.style.display="flex"
    }else{
        secondsec.style.display="none"
    }
    isOpenW=!isOpenW
})

let tvaudio= document.querySelector(".tvaudio")
let thirdsec=document.querySelector(".thirdsec")

let isOpenT=false;
tvaudio.addEventListener("click", () =>{
    
    if(!isOpenT) {
        thirdsec.style.display="flex"
    }else{
        thirdsec.style.display="none"
    }
    isOpenT=!isOpenT
})

let fotovideo= document.querySelector(".fotovideo")
let fourthsec=document.querySelector(".fourthsec")

let isOpenF=false;
fotovideo.addEventListener("click", () =>{
    
    if(!isOpenF) {
        fourthsec.style.display="flex"
    }else{
        fourthsec.style.display="none"
    }
    isOpenF=!isOpenF
})

let notebook= document.querySelector(".notebook")
let fifthsec=document.querySelector(".fifthsec")

let isOpenN=false;
notebook.addEventListener("click", () =>{
    
    if(!isOpenN) {
        fifthsec.style.display="flex"
    }else{
        fifthsec.style.display="none"
    }
    isOpenN=!isOpenN
})

let games= document.querySelector(".games")
let sixthsec=document.querySelector(".sixthsec")

let isOpenG=false;
games.addEventListener("click", () =>{
    
    if(!isOpenG) {
        sixthsec.style.display="flex"
    }else{
        sixthsec.style.display="none"
    }
    isOpenG=!isOpenG
})

let meiset= document.querySelector(".meiset")
let seventhsec=document.querySelector(".seventhsec")

let isOpenM=false;
meiset.addEventListener("click", () =>{
    
    if(!isOpenM) {
        seventhsec.style.display="flex"
    }else{
        seventhsec.style.display="none"
    }
    isOpenM=!isOpenM
})

let digerr= document.querySelector(".digerr")
let eighthsec=document.querySelector(".eighthsec")

let isOpenD=false;
digerr.addEventListener("click", () =>{
    
    if(!isOpenD) {
        eighthsec.style.display="flex"
    }else{
        eighthsec.style.display="none"
    }
    isOpenD=!isOpenD
})


let burger= document.querySelector(".burger")
let dropdown=document.querySelector(".dropdown")
let headerAlt = document.querySelector(".header-alt")
let resheader= document.querySelector(".resheader")

let isOpenBR=false;
burger.addEventListener("click", () =>{
    
    if(!isOpenBR) {
        dropdown.style.display="flex"
        headerAlt.style.opacity="0.5"
        resheader.style.opacity="0.5"
    }else{
        dropdown.style.display="none"
    }
    isOpenBR=!isOpenBR
})

let dpPhone= document.querySelector(".dpPhone")
let phoneOK=document.querySelector(".phoneOK")
let tabletOK=document.querySelector(".tabletOK")
let isOpenPHUL=false;
dpPhone.addEventListener("click", () =>{
    
    if(!isOpenPHUL) {
        phoneOK.style.display="block"
        tabletOK.style.display="block"
    }else{
        phoneOK.style.display="none"
        tabletOK.style.display="none"
    }
    isOpenPHUL=!isOpenPHUL
})

let dpPhoneUl=document.querySelector(".phonediv ul")
let isOpenONE=false;
phoneOK.addEventListener("click", () =>{
    if(!isOpenONE) {
        dpPhoneUl.style.display="block"
    }else{
        dpPhoneUl.style.display="none"
    }
    isOpenONE=!isOpenONE
})

let dpPhoneOl=document.querySelector(".phonediv ol")
let isOpenTWO=false;
tabletOK.addEventListener("click", () =>{
    if(!isOpenTWO) {
        dpPhoneOl.style.display="block"
    }else{
        dpPhoneOl.style.display="none"
    }
    isOpenTWO=!isOpenTWO
})

let dpWatchOl=document.querySelector(".watchdiv ol")
let watchOK=document.querySelector(".watchOK")
let isOpenTHREE=false;
watchOK.addEventListener("click", () =>{
    if(!isOpenTHREE) {
        dpWatchOl.style.display="block"
    }else{
        dpWatchOl.style.display="none"
    }
    isOpenTHREE=!isOpenTHREE
})

let dpTvUl=document.querySelector(".tvOK ul")
let tvOK=document.querySelector(".tvOK")
let isOpenFOUR=false;
tvOK.addEventListener("click", () =>{
    if(!isOpenFOUR) {
        dpTvUl.style.display="block"
    }else{
        dpTvUl.style.display="none"
    }
    isOpenFOUR=!isOpenFOUR
})

let dpTvUl2=document.querySelector(".tvOK-1 ul")
let tvOK1=document.querySelector(".tvOK-1")
let isOpenFIVE=false;
tvOK1.addEventListener("click", () =>{
    if(!isOpenFIVE) {
        dpTvUl2.style.display="block"
    }else{
        dpTvUl2.style.display="none"
    }
    isOpenFIVE=!isOpenFIVE
})