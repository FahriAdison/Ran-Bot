let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.DATABASE.data.users[who]
    let bls = `
📇 *Name*: ${user.name}
🎫 *Limit*:${user.limit}
🎟 ️*Limit Game* : ${user.glimit}
`.trim()
itsu.sendButton(m.chat, bls, dga, 'SHOP', '#shop', m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler