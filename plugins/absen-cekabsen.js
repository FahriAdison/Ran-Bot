let handler = async (m, { itsu, usedPrefix }) => {
    let id = m.chat
    itsu.absen = itsu.absen ? itsu.absen : {}
    if (!(id in itsu.absen)) throw `_*Tidak Ada Absen Berlangsung Digrup Ini!*_\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = itsu.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    itsu.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${itsu.absen[id][2]}

┌ *Yang sudah absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

Ran_2022`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['group']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler