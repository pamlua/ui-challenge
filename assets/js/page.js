$(document).ready(function(){

var pageEl = $("body").find(".main");

pageEl.on("click", ".js-SubmitForm", {}, function(evt) {

	// prevent default action
	evt.preventDefault();

	if (true) {
		//todo: logic for choosing presidents
		$(".js-SubmitForm").hide();
		//todo: append html to results container
		$(".results-container").slideDown("slow");
	} else {
		//todo: needs to validate form answers upon submission
		alert("You have not answered all of the questions!");
	}

}).on("click", "input:checkbox", {}, function(){

	//allows only one checkbox to be selected at a time
	//todo: needs to allow two to be selected for fourth question
	var box = $(this);

	if (box.is(":checked")) {
	    var group = "input:checkbox[name='" + box.attr("name") + "']";
	    // the checked state of the group/box on the other hand will change
	    // and the current value is retrieved using .prop() method
	    $(group).prop("checked", false);
	    box.prop("checked", true);
	} else {
	    box.prop("checked", false);
	}

	$("input:checkbox:not(:checked) + label").css({ opacity: 0.5 });
	$("input:checkbox:checked + label").css({ opacity: 1 });

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