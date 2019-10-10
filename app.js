
var express = require('express');

var fs = require('fs');


var app = express();


'use strict';


const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const bot = new ViberBot({
    authToken: "4a63dbccfa27d0b8-7903f3d0a2b0452d-d2d829486b766176",
    name: "qViber",
    avatar: "https://dl-media.viber.com/1/share/2/long/vibes/icon/image/0x0/b8b9/1f8182e24008fa84821087556a9cd995716df3c454afd8e816866b73f083b8b9.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

// Wasn't that easy? Let's create HTTPS server and set the webhook:
const https = require('https');
const port = process.env.PORT || 62000;
//Change Port --> 

app.set('port', (process.env.PORT || '0.0.0.0', 62000));


// Viber will push messages sent to this URL. Web server should be internet-facing.
const webhookUrl = "https://demo.convergence.co.th:62000/viber/webhooks";


const httpsOptions = {
    cert: fs.readFileSync('/etc/letsencrypt/live/demo.convergence.co.th/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/demo.convergence.co.th/privkey.pem')
}; // Trusted SSL certification (not self-signed).


const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;
const ContactMessage = require('viber-bot').Message.Contact;
const PictureMessage = require('viber-bot').Message.Picture;
const VideoMessage = require('viber-bot').Message.Video;
const LocationMessage = require('viber-bot').Message.Location;
const StickerMessage = require('viber-bot').Message.Sticker;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;


//MainKeyboard || RichMunu
var mainkey = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "http://demo.convergence.co.th:50003/viewUpload/wallet_111278Original.png",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Balance",
            "Text": "Check Balance",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://cdn2.iconfinder.com/data/icons/modern-business-advertising-and-media-1/48/Modern_Business_newspaper_ads-512.png",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "News",
            "Text": "Check News ",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 70,
            "TextSize": "regular"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://cdn3.iconfinder.com/data/icons/business-vol-24/100/Artboard_12-512.png",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Promotion",
            "Text": "Check Promotion",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://cdn2.iconfinder.com/data/icons/reports-and-analytics-7/49/9-512.png",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "report",
            "Text": "Report ",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://eyecarebusiness.ca/wp/wp-content/uploads/map.jpg",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "location",
            "Text": "ATM Near Me",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 80,
            "TextSize": "large"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://icon-library.net/images/3-dot-icon/3-dot-icon-14.jpg",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "MoreOption",
            "Text": "More Option",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "large"
        }

    ]
};
var mainkeySendback = new KeyboardMessage(mainkey);
var mainkeytrack = "keyboard Menu";
//SecondKeyboard 
var subkey = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 2,
            "Rows": 2,
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Credit",
            "Text": "<b>Check Credit</b>",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "large"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Request loan",
            "Text": "Request a loan",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 70,
            "TextSize": "large"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Change Credit Limit",
            "Text": "Change Credit Limit",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "large"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "CheckPoint",
            "Text": "Check Credit Point",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "large"
        },
        {
            "Columns": 2,
            "Rows": 2,
            "BgMedia": "https://icon-library.net/images/3-dot-icon/3-dot-icon-14.jpg",
            "BgColor": "#fafafa",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Back",
            "Text": "Back to MainMenu",
            "TextVAlign": "bottom",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "large"
        }

    ]
};
var subkeysendback = new KeyboardMessage(subkey);
var subkeytrack = "keyboard Menu";


var FlexMenu = {
    "Type": "rich_media",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 7,
    "BgColor": "#FFFFFF",
    "Buttons": [
        {
            "Columns": 6,
            "Rows": 3,
            "ActionType": "none",
            "ActionBody": "none",
            "Image": "http://demo.convergence.co.th:50003/viewUpload/10348376529750Original.jpg"
        },
        {
            "Columns": 6,
            "Rows": 2,
            "Text": "<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>",
            "ActionType": "open-url",
            "ActionBody": "https://www.google.com",
            "TextSize": "medium",
            "TextVAlign": "middle",
            "TextHAlign": "left"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "ActionType": "reply",
            "ActionBody": "https://www.google.com",
            "Text": "<font color=#ffffff>Buy</font>",
            "TextSize": "large",
            "TextVAlign": "middle",
            "TextHAlign": "middle",
            "Image": "https://s14.postimg.org/4mmt4rw1t/Button.png"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "ActionType": "reply",
            "ActionBody": "https://www.google.com",
            "Text": "<font color=#8367db>MORE DETAILS</font>",
            "TextSize": "small",
            "TextVAlign": "middle",
            "TextHAlign": "middle"
        },
        {
            "Columns": 6,
            "Rows": 3,
            "ActionType": "open-url",
            "ActionBody": "https://www.google.com",
            "Image": "http://demo.convergence.co.th:50003/viewUpload/336336Original.jpg"
        },
        {
            "Columns": 6,
            "Rows": 2,
            "Text": "<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
            "ActionType": "open-url",
            "ActionBody": "https://www.google.com",
            "TextSize": "medium",
            "TextVAlign": "middle",
            "TextHAlign": "left"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "ActionType": "reply",
            "ActionBody": "https://www.google.com",
            "Text": "<font color=#ffffff>Buy</font>",
            "TextSize": "large",
            "TextVAlign": "middle",
            "TextHAlign": "middle",
            "Image": "https://s14.postimg.org/4mmt4rw1t/Button.png"
        },
        {
            "Columns": 6,
            "Rows": 1,
            "ActionType": "reply",
            "ActionBody": "https://www.google.com",
            "Text": "<font color=#8367db>MORE DETAILS</font>",
            "TextSize": "small",
            "TextVAlign": "middle",
            "TextHAlign": "middle"
        },
        {
            "Columns": 6,
            "Rows": 7,
            "ActionType": "reply",
            "ActionBody": "Cancel",
            "Text": "<font color=#8367db>Cancel</font>",
            "TextSize": "large",
            "TextVAlign": "middle",
            "TextHAlign": "middle"
        }
    ]
}

app.post('/viber/webhooks', bot.middleware(), (req, res) => {
    const data = {
        "status": 0,
        "status_message": "ok",
        "event_types": [
            "delivered",
            "seen",
            "failed",
            "subscribed",
            "unsubscribed",
            "conversation_started"
        ]
    };
    res.send(data)
    const msg = JSON.parse(req.body);
    console.log("=========================")
    console.log(msg)
    console.log("=========================")
    var userProfile = msg.sender;
    //UserProfile : Sender Message Create For Reply
    if (msg.event == 'message') {

        if (msg.message.tracking_data != '""') {
            // Check Tracking_data in database 
            if (msg.message.tracking_data == '"keyboard Menu"') {
                // Check message.text 
                if (msg.message.text == 'Balance') {

                    bot.sendMessage(userProfile, [
                        new TextMessage("Your Saving Account balance is 51.70 $."),
                        mainkeySendback
                    ], mainkeytrack);
                }
                else if (msg.message.text == 'Credit') {
                    bot.sendMessage(userProfile, [
                        new TextMessage("Your Credit account balance is 1000 $."),
                        mainkeySendback
                    ], mainkeytrack);
                }
                else if (msg.message.text == 'MoreOption') {
                    
                    bot.sendMessage(userProfile, subkeysendback, mainkeytrack)

                } 
                else if (msg.message.text == 'location') {
                    bot.sendMessage(userProfile, [
                        new TextMessage("Please Send your Location")
                    ],"keyboard Menu");
                }
                else if (msg.message.type == 'location') {
                    console.log("user location : " , msg.message.location);
                    //Send 
                    //match location nearest find one
                    const msgsendback = new LocationMessage(13.8142509, 100.5408628);
                    bot.sendMessage(userProfile, [
                        new TextMessage("this ATM nearest to you"),
                        msgsendback,
                        mainkeySendback
                    ], mainkeytrack)

                }
                else if (msg.message.text == 'Promotion') {
                    bot.sendMessage(userProfile, [
                        new RichMediaMessage(FlexMenu)
                    ], "FlexMenu");
                }
                else if (msg.message.text == 'Back') {
                    bot.sendMessage(userProfile, mainkeySendback, mainkeytrack)
                }
                else {
                    bot.sendMessage(userProfile, [
                        new TextMessage("Sorry I don't understand "),
                        mainkeySendback
                    ], mainkeytrack);
                }
                // msgsendback
            }
            else if (msg.message.tracking_data == '"FlexMenu"') {
                if (msg.message.text == 'Cancel') {
                    console.log("Close Flex Menu")
                    bot.sendMessage(userProfile, mainkeySendback, mainkeytrack)
                }
                else {
                    bot.sendMessage(userProfile, [
                        new TextMessage("Sorry I don't understand "),
                        mainkeySendback
                    ], mainkeytrack);
                }
            } 
            else {
                bot.sendMessage(userProfile, [
                    new TextMessage("Sorry I don't understand "),
                    mainkeySendback
                ], mainkeytrack);
            }


        }
        else {
            if (msg.message.type == 'text') {
                var msgtext = msg.message.text
                msgtext = msgtext.toLowerCase();
                if (msgtext == "hi" || msgtext == "hey") {
                    bot.getBotProfile().then(response => {
                        bot.sendMessage(userProfile, new TextMessage("Hi , " + userProfile.name + " I'm " + response.name + " Write 'keyboard' For Open Menu"));
                    });
                }              
                else if (msgtext.search('help') != -1) {
                    bot.sendMessage(userProfile, new TextMessage("What do you want ? "));
                }
                else if (msgtext.search("keyboard") != -1 ) {
                    bot.sendMessage(userProfile, mainkeySendback, mainkeytrack)
                }
                else if (msgtext.search("location") != -1) {
                    const msgsendback = new LocationMessage(13.8142509, 100.5408628);
                    bot.sendMessage(userProfile, [
                        msgsendback,
                        mainkeySendback
                    ], mainkeytrack)
                }
                else {
                    console.log("++++++++++++++++++++++++++++++++++++")
                    console.log(msg)
                    console.log("++++++++++++++++++++++++++++++++++++")
                    bot.sendMessage(userProfile,[
                            new TextMessage("Sorry , I Don't UnderStand This Word"),
                            mainkeySendback
                    ], mainkeytrack);
                }

            }
            else if (msg.message.type == 'picture') {
                bot.sendMessage(userProfile, new TextMessage("Sorry , I Don't UnderStand This Picture"));
            }
            else {
                console.log("Out of Message Type ")
                bot.sendMessage(userProfile, new TextMessage("Sorry , I Don't UnderStand "));
            }
        }

    }
    else if (msg.event == 'conversation_started') {
        
        bot.getBotProfile().then(response => {
            bot.sendMessage(userProfile, new TextMessage("Hi , " + userProfile.name + " I'm " + response.name + " Write 'keyboard' For Open Menu"));
        });
    }
    else if (msg.event == 'subscribed') {
            bot.sendMessage(userProfile, new TextMessage("Thank you For Subscribed"))
    }
});

https.createServer(httpsOptions, app ).listen(port, () => { 
    bot.setWebhook(webhookUrl).then(() => {
        console.log("setWeb Hook Finish")
    }).catch(err => {
        console.log("On Error ")
        console.log(err)
    });
});
