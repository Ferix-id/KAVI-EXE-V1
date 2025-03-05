const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KAVI-EXE=UUoE0bZS#3sAEqMLX28LGP88aBo93kKw20XVqTLQbf5wRQsKjBTs",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "false",
MODE: process.env.MODE || "private",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`SEEN YOUR STATUS BY 𝐊𝐀𝐕𝐈-𝐄𝐗𝐄🗿🍷`",
ANTI_CALL: process.env.ANTI_CALL || "false",
};
