$(window).ready(() => {
	// eventlistener for burger menu
	$("#burgerMenu").click(function (){
		if ($("#menu").css("left") != "0px") {
			$("#menu").animate({ left: "0%" }, 700);
			$("footer").animate({ left: "0%" }, 700);
			$(this).toggleClass("open");
			$("main").animate({ opacity: "0.05" }, 700);
		} else {
			$("#menu").animate({ left: "-100%" }, 700);
			$("footer").animate({ left: "-100%" }, 700);
			$(this).toggleClass("open");
			$("main").animate({ opacity: "1" }, 700);
		}
	});
});
