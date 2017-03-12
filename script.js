$(document).ready(function() {

	//window.alert("JavaScript is Working :)");
	var button = $("#click_me");
	button.on('click', function() {
		$(this).html("Clicked!")
	})
})

