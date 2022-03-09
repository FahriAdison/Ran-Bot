let handler  = async (m, { itsu, usedPrefix: _p }) => {
let info = `SC VIA GITHUB JNGN LUPA FOLLOW
Atau Bisa Lewat Link Dibawah Ini :
https://github.com/FahriAdison
`.trim()

itsu.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Follow Bang Biar Dapat Update*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler