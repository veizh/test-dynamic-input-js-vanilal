import input from "./class/input.js"
const container = document.querySelector('.container-form')
const reggexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const reggexPrenom = /[a-zA-Z]{2,}/;
let tmp = [["first ","text","rentrer votre prénom :","jean","je suis l'erreur","required",reggexPrenom],
   ["last ","text","rentrer votre nom :","jean","je suis l'erreur","required",reggexPrenom],
   ["mail","text","rentrer votre mail :","jean","je suis l'erreur","required",reggexMail],
]
tmp.forEach(element => {
   let tmp =  new input(...element)
   tmp.init(container)
});