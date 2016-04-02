// ==UserScript==
// @name         robin.bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Robin Spam Bot
// @author       /u/eighthmoon (credit to /u/keythkatz for original Robin Autovoter)
// @match        http*://*reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

function sendMessage(message){
        $("#robinSendMessage > input[type='text']").val(message);
        $("#robinSendMessage > input[type='submit']").click();
}

function inSeconds(time){
        return seconds * 1000;
}
function inMinutes(time){
        return inSeconds(time) * 60;
}
function inHours(time){
        return inMinutes(time) * 60;
}

setTimeout(function(){
        //var participants = $(".robin-room-participant").length;
        //var partiText = "";
        //if (participants == 200) partiText = 200 + " " + $(".robin-user-list-overflow-indicator").text();
        //else partiText = participants;

        var timeRemText = "] " + $("span:contains('Voting will end')").first().text();

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
        setTimeout(function(){
                sendMessage("/me voted to PRAISE NIGGERNIGGERS");
        }, inMinutes(1));
}, inSeconds(5);
