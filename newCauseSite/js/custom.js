$(document).ready(function(){

	console.log("Hello World");
	$(".page-header").fadeIn(1000);


	$(".btn").click(function(){
		$(".btn").css("display", "none");
		$(".panel").css("display", "block");
	});

	$(".video").mouseover(function(){
		$("h3").addClass("a");
		$(".thank").html("Watch this video for a quick overview on Global Warming!");

	});

	$(".video").mouseleave(function(){
		$("h3").removeClass("a");
		$(".thank").html("&nbsp;");
	});

	$(".cow").velocity("transition.slideDownIn");
	
	$(".hog").mouseover(function(){
		$(".fox").html(":) :) :) :) :) :) :) :) :) :)");
	});

	$(".hog").mouseleave(function(){
		$(".fox").html("&nbsp")
	});


});

