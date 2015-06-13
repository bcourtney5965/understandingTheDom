$(document).ready(function () {
var form = document.getElementById("input-form"),
       list = document.getElementById("list");



function getInput(event){
	event.preventDefault();     
	var inputValue = document.getElementById("input-field").value  
  
    console.log(inputValue)
       form.reset();              // _______________Reset method 
       
       document.getElementById("list").innerHTML += "<li>"+ inputValue +"</li>"; 
}
form.addEventListener("submit",getInput,false) 
   
   function removeListItem(e) {
       var target = e.target;
       if(target.tagName !== 'LI'){ 
           return undefined
       }
       target.parentNode.removeChild(target);
   }
   list.addEventListener('click', removeListItem);
});
