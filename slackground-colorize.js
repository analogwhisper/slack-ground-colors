// ==UserScript==
// @name        slackColors
// @namespace   slack
// @include     https://yourchannelat.slack.com/messages/
// @version     1
// @grant       none
// ==/UserScript==

var desiredColor;
var updateInterval = 5000; // in ms
var xpathDiv = "//div[@id='msgs_div']"; // xpath to div chat window
var xpathSelectedChat = "//a[contains(@class,'--selected')]"; // xpath for current selected/channel user
var channelOrUserChanged = false;
var newSelectedChatText = "init";
var previousSelectedChatText = "";

setInterval(function(){
    // get the text of the current selected channel/user
    newSelectedChatText = 
        document.evaluate(xpathSelectedChat, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
                .singleNodeValue
                .text;
    
    // check whether a change was made
    channelOrUserChanged = newSelectedChatText.valueOf() != previousSelectedChatText.valueOf() ? true : false;
    previousSelectedChatText = newSelectedChatText.valueOf();
   
    if (channelOrUserChanged) {
        // set the desiredColor to specified color.  group channels/users to be a specific color if you'd like
        switch (newSelectedChatText) {
            // group the channels that share the colors you'd like
            case "channelName1":
            case "channelName2":
                desiredColor = "#fff78c";
                break;
            case "userName1":
                desiredColor = "#b7fcff";
                break;
            default:
                desiredColor = "white";
                break;
        }

        // get the div chat window element
        var element = 
            document.evaluate(xpathDiv, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
                    .singleNodeValue;

        // update the background color
        element.style.backgroundColor = desiredColor;
    }
  
}, updateInterval) // change the monitor timing here
