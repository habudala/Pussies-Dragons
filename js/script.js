$("#run").click(function () {

	document.getElementById("message").innerHTML = "You ran away, like a little pussy!";

	document.getElementById("choice").src = "dice-img/fleeing.png";

	//don't forget if you are using classes, or IDs. It gave you trouble this time. Also getElementByClassName 
	// said "it's not a function"

	//to change an image, use the src property!!!
});
	
$("#fight").click(function (){
	document.getElementById("choice").src = "dice-img/dragon.png";
});
	

$("#fight").click(function (){
	$("#img1").addClass("dieOne");
	$("#img2").addClass("dieTwo");
	setTimeout(fight,2000);
});

$("#fight").mouseenter(function (){
	$("#img1").removeClass("dieOne");
	$("#img2").removeClass("dieTwo");
});

	

function fight () {

	var die1 = Math.floor(Math.random()*6)+1;// getting a random number for die 1
	// alert(die1);--> checking if it works
	//depending on the number ,that's which image is going to pop up
	document.getElementById("img1").src = "dice-img/d" + die1 + ".gif";
	//alert(die1);
	var die2 = Math.floor(Math.random()*6)+1;// getting random number for die 2
	// alert(die1);--> checking if it works
	// depending on the number ,that's which image is going to pop up
	document.getElementById("img2").src = "dice-img/d" + die2 + ".gif";
	
	// this if-else statement decides based on your rolls whether or not you won
	if (die1 + die2 >= 8) { document.getElementById("message"). innerHTML = "Congratulations! You are now officially a dragon slayer!";
	}else{document.getElementById("message").innerHTML = "I'm sorry, but you got burned to a crisp! Better luck next time!";}
	//this resets the picture of the dragon after you hit fight (in case you hit run beforehand)
	
}


















