let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { itsu, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await itsu.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 999999
        var now = new Date() * 999999
        if (now < global.DATABASE.data.chats[res.gid].expired) global.DATABASE.data.chats[res.gid].expired += jumlahHari
        else global.DATABASE.data.chats[res.gid].expired = now + jumlahHari
    })
    await itsu.sendMessage(res.gid, `Halo,\n *${itsu.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, Saya baru saja bergabung di grup ini diundang oleh @${m.sender.split`@`[0]}
    
ketik *#menu* untuk melihat daftar perintah`, MessageType.text, { contextInfo: { externalAdReply :{
       mediaUrl: ' ',
       mediaType: 4,
       title: 'Ran-Bot',
       body: 'Recode WhatsApp Bot',
       thumbnailUrl: 'https://i.bandori.party/u/c/art/a/1787Ran-Mitake-Cool-ALcsqX.png',
sourceUrl: 'https://wa.me/17608914335?text=Assalamualaikum'
}}})
}
handler.help = ['joinp <linkgrup>']
handler.tags = ['owner','premium']
handler.command = /^joinp$/i
handler.premium = true
handler.rowner = true

module.exports = handler