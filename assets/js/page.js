$(document).ready(function(){

var pageEl = $("body").find(".main");

pageEl.on("click", ".js-SubmitForm", {}, function(evt) {
	// prevent default action
	evt.preventDefault();
	
	alert('!!!!');
});

function getName() {
    var name;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        name = "Hello stranger!";
    } else {
        name = "Hi " + person + "!";
    }
   document.getElementById("js-Name").innerHTML = name;
}
getName();


});