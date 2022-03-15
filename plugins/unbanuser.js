let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { itsu, text}) => {
    if (!text) throw 'Siapa yang mau di unbanned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.DATABASE.data.users
    users[who].banned = false
    itsu.reply(m.chat, `berhasil unbanned`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
