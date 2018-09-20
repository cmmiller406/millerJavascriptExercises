///Exercise #1///

var greeting= "Enter a Number!";
var number= prompt (greeting);

var total=0


for (var i=0; i<+number; i++){
	total += i;
}
	console.log(total)
	
///Exercise #2///

var answer= prompt("Do you want to play?");

if (answer=="no"){
  console.log ("Maybe next time.");
}

else if(answer=="yes"){
  var input= prompt ("Enter a word.");
  var secondAnswer= prompt ("Do you want to play again?");

 do {var input2= prompt ("Enter a word.");
 secondAnswer= prompt ("Do you want to play again?");
 input += (" "+ input2); 
} while (secondAnswer !== "no");
}

if (secondAnswer=="no"){
console.log(input);
}

///Exercise #3///

var username= prompt ("What is your name?");

var printname= prompt ("Would you like to print your name?");

while (printname === "yes"){
 console.log ("Hello. My name is" + " " + username + "!");
 username += "!";
printname= prompt("Would you like to print your name?");
}

///Exercise #4///

var timeofday= prompt ("What time of day is it? Morning, Noon, or Evening?");

if (timeofday === "Morning") {
	console.log ("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeofday === "Noon") {
	console.log ("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (timeofday === "Evening") {
	console.log ("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
} 