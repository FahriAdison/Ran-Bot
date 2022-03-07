let fetch = require('node-fetch')
let handler = async (m, { itsu, text, usedPrefix, command }) => {
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  m.reply(wait)
  await itsu.sendFile(m.chat, `https://apikey-bear3.herokuapp.com/api/sertifikat/${command}?apikey=KingOfBear&name=${text}`, 'file.jpg', 'Dukung Terus Bot Ini', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tolol <nama>', 'fuckboy <nama>', 'fuckgirl <nama>', 'bucinserti <nama>']
handler.tags = ['sertifikat']
handler.command = /^(tolol|fuckboy|fuckgirl|bucinserti)$/i

module.exports = handler
