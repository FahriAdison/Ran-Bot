let fs = require('fs')
const thumb = fs.readFileSync('./src/bank.jpg')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { itsu }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.DATABASE.data.users[who]
let anu = `╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${user.name}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎨 *Age* : ${user.registered ? '' + user.age : ''}
├─ 🎫 *Limit*:${user.limit}
├─ 💹 *Money*: ${user.money}
├─ 📍 *Role*: ${user.role}
├─ 💳 *Bank* : ${user.atm}
├─ 🎟 ️ *Limit Game* : ${user.glimit}
├─ 📊 *Level*: ${user.level}
╰─❑ ✨ *Exp*:${user.exp}
`.trim()
itsu.sendButtonLoc(m.chat, thumb, anu, wm, 'Inventory', '#inv', m)
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler