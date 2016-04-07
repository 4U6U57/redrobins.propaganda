// ==UserScript==
// @name         redrobins.propaganda
// @namespace    http://reddit.com/r/RedRobins
// @version      04.07.9
// @description  Red Robin Propaganda Bot
// @author       /u/eighthmoon (credit to /u/keythkatz for original Robin Autovoter)
// @match        https://www.reddit.com/robin*
// @grant        none
// @updateURL	 https://gist.githubusercontent.com/4U6U57/0037f663f8839b4fe7180dcd2620143e/raw/redrobins.propaganda.user.js
// @downloadURL	 https://gist.githubusercontent.com/4U6U57/0037f663f8839b4fe7180dcd2620143e/raw/redrobins.propaganda.user.js
// ==/UserScript==
/* jshint -W097 */

/* RED ROBINS
Please, take this script and modify it as you will, to spread the word of Marx
and the Red Robins Communist Party http://reddit.com/r/RedRobins.
However, if you do modify it, please keep this section of the code (between the
RED ROBINS) intact. Thank you, and welcome to the botnet Comrade.
 RED ROBINS*/

// ALL CUSTOMIZATION FEATURES BELOW
var VERSION = "04.07.9";
var TAG = "redrobins"; // You can filter messages in the developer console
var time = 0; // The time for Communist Revolution is now
var mainDelay = inSeconds(5); // Do not change or Marx will die
var msgDelay = 1; // Randomly generated, starts at 0 to print immediately
var msgAverageDelay = inMinutes(10); // Average amount of delay between posts, actual delay random betwen 0 and 2*average
var reloadDelay = inHours(1); // Amount of tie before resetting
// Feel free to change Minutes into Seconds (must be divisible by mainDelay) or Hours, and change the quantity

// Below is array of messages, feel free to modify/change the number of them (surrounded by quotes, separated by commas)
var messages = [
	"We must liberate the working class! Join the Party! http://reddit.com/r/RedRobins",
	"Distribute the karma fairly to the masses! Join the Party! http://reddit.com/r/RedRobins",
	"Form a dictatorship of the proletariat! Join the Party! http://reddit.com/r/RedRobins",
	"Seize the means of production! Join the Party! http://reddit.com/r/RedRobins",
	"Overthrow the bourgeois shitposting system! Join the Party! http://reddit.com/r/RedRobins",
	"Embrace the teachings of Marx! Join the Party! http://reddit.com/r/RedRobins",
	"Seize the means of reposting! Join the Party! http://reddit.com/r/RedRobins",
	"Take part in our 4 year plan to decrease shitposting! Join the Party! http://reddit.com/r/RedRobins",
	"Estabish the reddit Communist regime! Join the Party! http://reddit.com/r/RedRobins",
	"We accept comrades of all colors! Join the Party! http://reddit.com/r/RedRobins",
	"Join us as a Comrade! Join the Red Robins! http://reddit.com/r/RedRobins",
	"John Madden is a capitalist and must be impeached! Join the Party! http://reddit.com/r/RedRobins",
	"Distribute the banana facts to the working class! Join the Party! http://reddit.com/r/RedRobins",
	"Growth is capitalism. Staying is consenting to injustice. Overthrow the broken system! http://reddit.com/r/RedRobins"
];
var channels = ["+", "*", "#gov", "^", "$", "<>", "<3", "&", ""];
var prefix = "/me";

function randomInt(max) { // returns random element from 0 to max - 1
	return Math.floor(Math.random() * max);
}
function randomFrom(array) { // returns random element from array
	return array[randomInt(array.length)];
}
function inSeconds(time){ // time conversion function, converts units to ms
	return time * 1000;
}
function inMinutes(time){
	return inSeconds(time) * 60;
}
function inHours(time){
	return inMinutes(time) * 60;
}
function currentTime(){ // returns current elapsed in HH:MM:SS
	return printTime(time);
}
function printTime(duration){
	var seconds = duration / 1000;
	var hours = parseInt( seconds / 3600 );
	seconds = seconds % 3600;
	var minutes = parseInt( seconds / 60 );
	seconds = seconds % 60;
	return hours + ":" + minutes + ":" + seconds;
}
function intervalOf(duration){ // returns if current time is interval of duration
	return time % duration === 0;
}
function logger(msg){
	console.log(TAG + " (" + VERSION + ") : " + msg);
}

function sendMessage(message){
	logger("msg: " + message);
	$("#robinSendMessage > input[type='text']").val(message);
	$("#robinSendMessage > input[type='submit']").click();
}

function main(){

	if(intervalOf(inSeconds(30))) logger("time: " + currentTime());
	setTimeout(function(){
		//var participants = $(".robin-room-participant").length;
		//var partiText = "";
		//if (participants == 200) partiText = 200 + " " + $(".robin-user-list-overflow-indicator").text();
		//else partiText = participants;

		//var timeRemText = "] " + $("span:contains('Voting will end')").first().text();

		//sendMessage("/vote grow");
		//if(Math.random() < 0.2) sendMessage("[Robin Autovoter 1.10] Autovoted grow! https://www.reddit.com/r/joinrobin/comments/4cx02w/better_working_automatic_grow_script/");

		/*setTimeout(function(){
                if($("span:contains('" + timeRemText + "')")[0] == undefined){
                sendMessage("[Robin Autovoter 1.12] " + $("span:contains('Voting will end')").first().text() + " redd.it/4cx02w");
                }
                }, 10000);
                setTimeout(function(){
                window.location.reload();
                }, inMinutes(20));
                */

		if(intervalOf(msgDelay)) {
			var message = randomFrom(messages);
			if(channels.length > 0) message = randomFrom(channels) + " " + message;
			if(prefix.length > 0) message = prefix + " " + message;
			sendMessage(message);
			msgDelay = randomInt(2 * msgAverageDelay);
			msgDelay -= msgDelay % mainDelay; // Need to round
			logger("next: " + printTime(msgDelay));
		}

		// Continue
		time += mainDelay;
		main();
	}, mainDelay);
}
main();
setTimeout(function(){
	window.location.reload();
}, reloadDelay);