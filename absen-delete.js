let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    itsu.absen = itsu.absen ? itsu.absen : {}
    if (!(id in itsu.absen)) throw `_*Tidak Ada Absen Berlangsung Digrup Ini!*_\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`
    delete itsu.absen[id]
    m.reply(`Done!`)
}
handler.help = ['hapusabsen']
handler.tags = ['group']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler