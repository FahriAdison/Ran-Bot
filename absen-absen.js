let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    itsu.absen = itsu.absen ? itsu.absen : {}
    if (!(id in itsu.absen)) throw `_*Tidak Ada Absen Berlangsung Digrup Ini!*_\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`

    let absen = itsu.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu Sudah Absen!! *'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
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
handler.help = ['absen']
handler.tags = ['abs']
handler.command = ['absen']
handler.group = true
module.exports = handler