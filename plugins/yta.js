let limit = 600
let yts = require('yt-search')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { itsu, args, text, isPrems, isOwner, usedPrefix, command }) => {
	let d = new Date
    let locale = 'id'
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
  let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
   let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!args || !args[0]) throw `contoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = global.DATABASE.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\n\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : global.wait)
  if (!isLimit) itsu.sendFile(m.chat, dl_link, title + '.mp3', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
`.trim(), 'conversation', null, { quoted: m, asDocument: chat.useDocument, mimetype: 'audio/mp4', contextInfo: {  externalAdReply :{
mediaUrl: `${vid.url}`,
mediaType: 2,
title: `${title}`,
body: `${week} ${date}`,
thumbnailUrl: `${thumb}`,
}}})  
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler