let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    itsu.absen = itsu.absen ? itsu.absen : {}
    if (!(id in itsu.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let absen = itsu.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    itsu.reply(m.chat, `
Tanggal: ${date}
${itsu.absen[id][2]}
┌〔 Yang sudah absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────
Ran_2022`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
