let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 1
let handler  = async (m, { itsu, args, usedPrefix, command }) => {
	await itsu.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=Deffbotz')
    	.then(res => res.json())
    	.then(json => {
    		itsu.updatePresence(m.chat, Presence.composing) 
    		itsu.reply(m.chat, `\`\`\`Tunggu sebentar . . .\`\`\``, m)
			itsu.sendFile(m.chat, json.result.male, 'male.jpg', 'ini cowoknya', m)	
			itsu.sendFile(m.chat, json.result.female, 'female.jpg', 'nih ceweknya',m)
	}) .catch(() => { itsu.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['ppcouple']
handler.tags = ['anime']
handler.command = /^(ppcouple|ppcp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
module.exports = handler