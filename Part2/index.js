console.log("The house always wins")
let identity = document.getElementById("identify")
let style = document.getElementById("style")
 console.log(identity)
 console.log(style)
 function setCard(){
   let card = document.getElementById(identity.value)
   console.log(card)
   card.style.color = style.value
 }
 function reset(){
   let colorReset = document.getElementsByTagName("section")
   for (let i = 0; i < colorReset.length; i++){
     colorReset[i].style.color = "grey";
   }  
 }