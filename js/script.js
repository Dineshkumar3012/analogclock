setInterval(setTime,1000)

let hourHand = document.querySelector("[data-hour_hand]");
let minHand = document.querySelector("[data-min_hand]");
let secHand = document.querySelector("[data-sec_hand]");

function setTime(){
	let originalTime = new Date();
	let secondRotate = originalTime.getSeconds()/60;
	let minutesRotate = (secondRotate+originalTime.getMinutes())/60;
	let hourRotate = (minutesRotate+originalTime.getHours())/12;
	rotateClock(secHand,secondRotate);
	rotateClock(minHand,minutesRotate);
	rotateClock(hourHand,hourRotate);
}

function rotateClock(element1,rotate){
	element1.style.setProperty("--rotation",rotate*360)
}


setInterval(bgColor,1000);

function bgColor(){
		let color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink",
    "Brown", "Black", "White", "Gray", "Turquoise", "Teal", "Magenta", "Gold", "Silver", "Beige", "Maroon", "Olive", "Coral", "Indigo", "Violet", "Cyan", "Lime", "Lavender","lightgreen", "lightgrey", "Sapphire", "Emerald", "Amber", "orangered",
    "Mint", "Chocolate", "Charcoal", "Salmon", "Plum", "Navy", "Mustard", "Rose"]
		 
		let a=Math.floor((Math.random()*40)) ;
		
		document.body.style.backgroundColor = color[a];
}