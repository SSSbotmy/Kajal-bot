//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "MISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ///////@prem-babu3608
	description: "THIS BOT IS MR PREM BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("miss uou") ||
     react.includes("MISS YOU") || react.includes("I miss you") || react.includes("I MISS YOU") ||
react.includes("miss u") ||
react.includes("Miss you")) {
		var msg = {
				body: `‌🥺 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺`,attachment: fs.createReadStream(__dirname + `/AADI/KK5.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }