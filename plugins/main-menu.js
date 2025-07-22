const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const fs = require("fs")
const path = require("path")
const { runtime } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: "command",
    desc: "menu the bot",
    category: "menu",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        let info = `
╭━━〔 *${config.BOT_NAME}* 〕━━╮
┃ 👑 Owner     : *${config.OWNER_NAME}*
┃ 🙋‍♂️ User      : *${m.pushName}*
┃ ⚙️ Mode      : *${mode}*
┃ 💻 Platform  : *${os.platform()}*
┃ 🔤 Prefix    : [${prefix}]
┃ 🧩 Version   : *1.0*
╰━━━━━━━━━━━━━━━━━━━━═══╣

> ${pushwish} *${m.pushName}*!

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
║ •🎭 ʀᴍʙɢ 
║ •🎭 ɪʏʀɪᴄ𝘀 
║ •💫 ɢᴘᴀ𝘀𝘀 
║ •💫 ᴇʙɪɴᴀʀʏ 
║ •💫 ᴅʙɪɴᴀʀʏ 
║ •💫 ᴇᴍᴏᴊɪᴍɪ𝘅 
║ •💫 ᴍᴘ𝟯 
║ •💫 ᴀᴛᴛᴘ 
║ •✨ ᴘᴏ𝘀ᴛ 
║ •✨ ʜᴀᴄᴋ 
║ •✨ ᴘʀᴀʏᴛɪᴍᴇ 
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
║ •🎭 ᴛᴏᴍᴘ𝟰 
║ •🎭 ᴛᴏᴍᴘ𝟯 
║ •🎭 ɪᴍɢ 
║ •🎭 ᴛɪᴋᴛᴏᴋ 
║ •🎭 ғᴀɴᴄʏ 
║ •🎭 ɢᴇᴛɪᴍᴀɢᴇ 
║ •🎭 ɪᴍɢ𝘀ᴄᴀɴ 
║ •🎭 ʜᴇʟᴘ-ᴄᴏᴅᴇ
║ •🎭 𝘀ᴛᴀʙɪʟɪᴛʏᴀɪ 
║ •🎭 ғʟᴜ𝘅ᴀɪ 
║ •🎭 𝘀ᴛᴀʙʟᴇᴅɪғғᴜ𝘀ɪᴏɴ 
║ •🎭 ʀᴍʙɢ 
║ •🎭 ɪʏʀɪᴄ𝘀 
║ •🎭 ғʟᴜ𝘅ᴀɪ 
║ •✨ ᴍᴏᴠɪᴇ 
║ •✨ ɴᴇᴡ𝘀 
║ •✨ 𝘀ᴄʀᴇᴇɴ𝘀ʜᴏᴛ 
║ •✨ ʀᴡ 
║ •✨ ᴛɪɴʏ 
║ •✨ ᴛɪᴋᴛᴏᴋ𝘀ᴇᴀʀᴄʜ 
║ •✨ ᴛᴏᴘᴛᴛ 
║ •✨ ᴛᴏᴍᴘ𝟯 
║ •✨ ᴄᴏɴᴠᴇʀᴛ 
║ •✨ ᴛᴏᴘᴅғ 
║ •✨ ᴀᴛᴛᴘ 
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
║ •👤 ᴘᴏʟʟʟ 
║ •👤 ᴏᴜᴛ 
║ •👤 ʀᴇᴍᴏᴠᴇᴀʟʟ𝟮 
║ •👤 ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴ𝘀 
║ •👤 ᴜɴʟᴏᴄᴋɢᴄ 
║ •👤 ᴜɴᴍᴜᴛᴇʟ
║ •👤 ʙʀᴏᴀᴅᴄᴀ𝘀ᴛ 
║ •👤 ᴛᴀɢᴀᴅᴍɪɴ𝘀 
╠═══════════════════╣
║ *𝘀ᴇᴀʀᴄʜ ᴍᴇɴᴜ* 
╠═══════════════════╣
║ •🕊️ 𝘀ᴀᴅ 
║ •🕊️ ᴀɴɢʀʏ 
║ •🕊️ ʜᴀᴘᴘʏ 
║ •🕊️ ʜᴇᴀʀᴛ 
║ •🕊️ ʜᴏᴛ 
║ •🕊️ ᴄᴏɴғᴜ𝘀ᴇᴅ 
║ •🕊️ ᴍᴏᴏɴ 
║ •🕊️ 𝘀ʜʏ 
║ •🕊️ ɴɪᴋᴀʟ 
╠═════════════════════╣
║ *ᴍᴀɪɴ ᴍᴇɴᴜ* 
╠═════════════════════╣
║ •✨ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ
║ •✨ ᴍᴏᴅᴇ 
║ •✨ 𝘀ᴇᴛᴘʀᴇғɪ𝘅 
║ •✨ ᴀᴅᴍɪɴ-ᴇᴠᴇɴᴛ𝘀 
║ •✨ ᴍᴇɴᴛɪᴏɴ-ʀᴇᴘʟʏ 
║ •✨ ᴀʟᴡᴀʏ𝘀-ᴏɴʟɪɴᴇ 
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ 
║ •✨ ᴀᴜᴛᴏ-𝘀ᴇᴇɴ 
║ •✨ 𝘀ᴛᴀᴛᴜ𝘀-ʀᴇᴀᴄᴛ 
║ •✨ ʀᴇᴀᴅ-ᴍᴇ𝘀𝘀ᴀɢᴇ 
║ •✨ ᴀᴜᴛᴏ-ᴠᴏɪᴄᴇ
║ •✨ ᴀɴᴛɪ-ʙᴀᴅ 
║ •✨ ᴀᴜᴛᴏ-𝘀ᴛɪᴄᴋᴇʀ 
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴘʟʏ 
║ •✨ ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ
║ •✨ 𝘀ᴛᴀᴛᴜ𝘀-ʀᴇᴘʟʏ 
║ •✨ ᴅᴇʟᴇᴛᴇʟɪɴᴋ 
║ •✨ ᴀɴᴛɪʟɪɴᴋ 
║ •✨ ᴀɴᴛɪʟɪɴᴋᴋɪᴄᴋ 
║ •✨ ᴀɴᴛɪᴄᴀʟʟ 
║ •✨ ᴘʀɪᴠᴀᴄʏ 
║ •✨ ʙʟᴏᴄᴋʟɪ𝘀ᴛ 
║ •✨ ɢᴇᴛʙɪᴏ 
║ •✨ 𝘀ᴇᴛᴏɴʟɪɴᴇ
║ •✨ 𝘀ᴇᴛᴘᴘ 
║ •✨ 𝘀ᴇᴛᴍʏɴᴀᴍᴇ
║ •✨ ᴜᴘᴅᴀᴛᴇʙɪᴏ
║ •✨ 𝘀ᴇᴛᴘᴘᴀʟʟ
║ •✨ ɢᴇᴛᴘʀɪᴠᴀᴄʏ 
║ •✨ ɢʀᴏᴜᴘ𝘀ᴘʀɪᴠᴀᴄʏ 
╚══════════════════
 *${config.DESCRIPTION}*`;

        // Random image from /scs folder
        const scsFolder = path.join(__dirname, "../scs");
        const images = fs.readdirSync(scsFolder).filter(f => /^menu\d+\.jpg$/i.test(f));
        let selectedImagePath;
        if (images.length > 0) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            selectedImagePath = path.join(scsFolder, randomImage);
        } else {
            selectedImagePath = null;
        }

        await conn.sendMessage(
            from,
            {
                image: selectedImagePath ? fs.readFileSync(selectedImagePath) : Buffer.alloc(0),
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: '𝗡𝗢𝗩𝗔-𝗫𝗠𝗗 🚘',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
