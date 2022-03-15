let handler = async (m, { itsu, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.itsu.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = false
    m.reply('Done!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner,handler.mods = true

module.exports = handler
