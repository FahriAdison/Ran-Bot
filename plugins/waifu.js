let fetch = require('node-fetch')
let handler = async (m, { itsu, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  itsu.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Istri Gweh Ya', wm, 'Next', `${usedPrefix + command}`, m,)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler

