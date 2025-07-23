const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const fs = require("fs");
const path = require("path");

// Friend's Blue Tick vCard
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "NOVA-XMD VERIFIED ✅",
      vcard: `BEGIN:VCARD
VERSION:3.0
FN:B.M.B VERIFIED ✅
ORG:BMB-TECH BOT;
TEL;type=CELL;type=VOICE;waid=255767862457:+255767862457
END:VCARD`
    }
  }
};

cmd({
  pattern: "menu",
  alias: ["allmenu", "command"],
  use: '.menu',
  desc: "menu the bot",
  category: "menu",
  react: "🔰",
  filename: __filename
}, async (conn, mek, m, {
  from,
  reply
}) => {
  try {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const imagePath = path.join(__dirname, '..', 'plugins', `menu${randomIndex}.jpg`);
    const imageBuffer = fs.readFileSync(imagePath);

    let dec = `╭━〔*🚀 𝗡𝗢𝗩𝗔-𝗫𝗠𝗗 🚀*〕━━┈⊷
┃❒╭────────────
┃❒│ 👑 *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
┃❒│ 🕹️ *ᴍᴏᴅᴇ:* *${config.MODE}*
┃❒│ 🎯 *ᴘʀᴇғɪx:* *${config.PREFIX}*
┃❒│ 💡 *ʀᴀᴍ ᴜsᴇ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} GB / ${Math.round(require('os').totalmem / 1024 / 1024)} GB
┃❒│ 👑 *ᴅᴇᴠ:* *𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷*
┃❒│ 🚀 *ᴠᴇʀsɪᴏɴ:* *1.0.0*
┃❒╰────────────────
╰━━━━━━━━━━━━━━━━━━┈⊷

╔══════════════════╣
║ *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ* 
╠══════════════════╣
║ •💫 ɢᴘᴛ 
║ •💫 ᴀɪ 
║ •💫 ᴠᴠ 
║ •💫 ᴠᴠ𝟮 
║ •💫 ʙɪʙʟᴇ 
║ •💫 ᴄʜᴀɴɴᴇʟ
║ •💫 ᴜɴʙʟᴏᴄᴋ 
║ •💫 ʙʟᴏᴄᴋ 
║ •💫 ᴜᴘᴛɪᴍᴇ
║ •💫 ᴄʜᴇᴄᴋᴜᴘᴅᴀᴛᴇ 
║ •💫 ᴄʜᴇᴄᴋ
║ •💫 ᴊɪᴅ 
║ •✨ ᴘɪɴɢ 
║ •💫 ᴘᴀɪʀ
║ •✨ ᴏᴡɴᴇʀ 
║ •💫 ɢᴇᴛᴘᴘ 
║ •💫 ɢɪᴛᴄʟᴏɴᴇ 
║ •💫 ɢɪᴛʜᴜʙ 
║ •🎭 ʟɪ𝘀ᴛᴏɴʟɪɴᴇ 
║ •🎭 ʟᴏɢᴏᴍᴇɴᴜ 
║ •🎭 ᴀʟɪᴠᴇ 
║ •🎭 ᴍᴇɴᴜ 
║ •✨ ʀᴇᴘᴏ 
║ •🎭 𝘀ᴛᴀʙʟᴇᴅɪғғᴜ𝘀ɪᴏɴ 
║ •💫 ᴇʙɪɴᴀʀʏ 
║ •💫 ᴅʙɪɴᴀʀʏ 
║ •💫 ᴍᴘ𝟯 
║ •💫 ᴀᴛᴛᴘ 
║ •✨ ᴘᴏ𝘀ᴛ 
║ •✨ ʜᴀᴄᴋ 
║ •✨ ǫᴜʀᴀɴ 
║ •✨ ǫᴜʀᴀɴᴍᴇɴᴜ
║ •✨ ʀᴇ𝘀ᴛᴀʀᴛ 
║ •✨ 𝘀ᴇɴᴅ 
║ •✨ 𝘀ᴛɪᴄᴋᴇʀ 
║ •✨ ᴛᴀᴋᴇ 
║ •✨ ᴘᴇʀ𝘀ᴏɴ 
╠═══════════════════╣
║ *ᴛᴏᴏʟ𝘀 ᴍᴇɴᴜ* 
╠══════════════════╣
║ •🎭 ғʙ
║ •🎭 ᴘʟᴀʏ 
║ •🎭 ᴘʟᴀʏ𝟭 
║ •🎭 ᴘʟᴀʏ𝟮 
║ •🎭 ᴀᴘᴋ 
║ •🎭 ᴠɪᴅᴇᴏ 
║ •🎭 ᴠɪᴅᴇᴏ𝟭 
║ •🎭 ɪᴍɢ 
║ •🎭 ᴛɪᴋᴛᴏᴋ 
║ •🎭 ғᴀɴᴄʏ 
║ •🎭 ɢᴇᴛɪᴍᴀɢᴇ 
║ •🎭 ɪᴍɢ𝘀ᴄᴀɴ 
║ •🎭 𝘀ᴛᴀʙɪʟɪᴛʏᴀɪ 
║ •🎭 ғʟᴜ𝘅ᴀɪ 
║ •🎭 ɪʏʀɪᴄ𝘀 
║ •✨ ᴍᴏᴠɪᴇ 
║ •✨ 𝘀ᴄʀᴇᴇɴ𝘀ʜᴏᴛ 
║ •✨ ʀᴡ 
║ •✨ ᴛɪɴʏ 
║ •✨ ᴛɪᴋᴛᴏᴋ𝘀ᴇᴀʀᴄʜ 
║ •✨ ᴛᴏᴘᴛᴛ 
║ •✨ ᴛᴏᴍᴘ𝟯 
║ •✨ ᴄᴏɴᴠᴇʀᴛ 
║ •✨ ᴠ𝘀ᴛɪᴄᴋᴇʀ
║ •✨ ᴛʀᴛ 
║ •✨ ᴛɪᴋᴛᴏᴋ𝟮 
║ •✨ ᴜʀʟ 
║ •✨ ᴡᴇᴀᴛʜᴇʀ 
║ •✨ ᴀɪᴠᴏɪᴄᴇ 
╠════════════════════╣
║ *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 
╠════════════════════╣
║ •👤 ʀᴇᴊᴇᴄᴛᴀʟʟ
║ •👤 ᴀᴄᴄᴇᴘᴛᴀʟʟ 
║ •👤 ʀᴇǫᴜᴇ𝘀ᴛʟɪ𝘀ᴛ 
║ •👤 ɢᴅᴇ𝘀ᴄ 
║ •👤 ᴅᴇᴍᴏᴛᴇ 
║ •👤 ᴀᴅᴍɪɴ 
║ •👤 ᴀᴅᴅ 
║ •👤 ᴋɪᴄᴋ 
║ •👤 ʜɪᴅᴇᴛᴀɢ
║ •👤 ᴛᴀɢᴀʟʟ 
║ •👤 ᴀɴᴛɪʟɪɴᴋ 
║ •👤 ᴘʀᴏᴍᴏᴛᴇ
║ •👤 𝘀ᴇᴛᴅᴇ𝘀ᴄ
║ •👤 ɢʀᴏᴜᴘ 
║ •👤 ɢᴄ𝘀ᴇᴛᴛɪɴɢ 
║ •👤 ᴡᴇʟᴄᴏᴍᴇ
║ •👤 ɢɴᴀᴍᴇ 
║ •👤 ɢɪɴғᴏ 
║ •👤 ᴊᴏɪɴ 
║ •👤 ɪɴᴠɪᴛᴇʟ 
║ •👤 ᴠᴄғʟ 
║ •👤 ʟᴇғᴛ 
║ •👤 ɴᴇᴡɢᴄ 
║ •👤 ᴍᴜᴛᴇ 
║ •👤 ʟᴏᴄᴋɢᴄ 
║ •👤 ᴏᴜᴛ 
║ •👤 ʀᴇᴍᴏᴠᴇᴀʟʟ𝟮 
║ •👤 ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴ𝘀 
║ •👤 ᴜɴʟᴏᴄᴋɢᴄ 
║ •👤 ᴜɴᴍᴜᴛᴇʟ
║ •👤 ᴛᴀɢᴀᴅᴍɪɴ𝘀 
╠═══════════════════╣
║ *ᴍᴀɪɴ ᴍᴇɴᴜ* 
╠═════════════════════╣
║ •✨ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ
║ •✨ ᴍᴏᴅᴇ 
║ •✨ ᴍᴇɴᴛɪᴏɴ-ʀᴇᴘʟʏ 
║ •✨ ᴀʟᴡᴀʏ𝘀-ᴏɴʟɪɴᴇ 
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ
║ •✨ 𝘀ᴛᴀᴛᴜ𝘀-ʀᴇᴀᴄᴛ 
║ •✨ ʀᴇᴀᴅ-ᴍᴇ𝘀𝘀ᴀɢᴇ 
║ •✨ ᴀᴜᴛᴏ-ᴠᴏɪᴄᴇ
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴘʟʏ 
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ
║ •✨ 𝘀ᴛᴀᴛᴜ𝘀-ʀᴇᴘʟʏ 
║ •✨ ᴅᴇʟᴇᴛᴇʟɪɴᴋ 
║ •✨ ᴀɴᴛɪʟɪɴᴋ 
║ •✨ ᴀɴᴛɪʟɪɴᴋᴋɪᴄᴋ 
║ •✨ ᴀɴᴛɪᴄᴀʟʟ 
║ •✨ ʙʟᴏᴄᴋʟɪ𝘀ᴛ 
║ •✨ ɢᴇᴛʙɪᴏ 
╚════════════════════╣

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙽𝙾𝚅𝙰-𝚇𝙼𝙳🚘`;

    await conn.sendMessage(
      from,
      {
        image: imageBuffer,
        caption: dec,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363382023564830@newsletter',
            newsletterName: '𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙃',
            serverMessageId: 143
          }
        }
      },
      { quoted: quotedContact }
    );

  } catch (e) {
    console.log(e);
    reply(`${e}`);
  }
});
