let fetch = require('node-fetch')
     let handler  = async (m, { itsu, usedPrefix, command }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=Deffbotz`)
    json = await heum.buffer()
    // itsu.sendFile(m.chat, json, 'loli.jpg', 'Lomlinya kak', m, false)
   itsu.sendButtonImg(m.chat, json, 'Suami Kok Kartun :v', wm, 'NEXT', `${usedPrefix + command}`, m)
//sendButtonImg(jid, content, url, footer, button1, row1, options = {}) {
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^husbu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

