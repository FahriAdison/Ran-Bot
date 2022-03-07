let limit = 500
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { itsu, text, args, isPrems, isOwner }) => {
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
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.DATABASE.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  itsu.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
`.trim(), m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) itsu.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), 'conversation', false, {
 quoted: m,  ..._thumb,
 asDocument: chat.useDocument
, contextInfo: {  externalAdReply :{
mediaUrl: `${vid.url}`,
mediaType: 2,
title: `${title}`,
body: `${week} ${date}`,
thumbnailUrl: `${thumb}`,
}}})  
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
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

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}