let handler = async(m, { itsu, args, usedPrefix }) => {

    if (args.length == 0) return itsu.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '070698' || args[0] == '661528' || args[0] == '878588' || args[0] == '775636' || args[0] == '098786' || args[0] == '975485') {

    if (new Date - global.DATABASE.data.users[m.sender].lastcodereg > 889000000000) {
    if (new Date - global.DATABASE.data.users[m.sender].lastcodereg < 889000000000) throw `Anda sudah mengambill code register, Code register anda sudah kadaluarsa..`

    global.DATABASE.data.users[m.sender].exp += 1000
    global.DATABASE.data.users[m.sender].money += 500
    global.DATABASE.data.users[m.sender].limit += 2
    global.DATABASE.data.users[m.sender].bank += 1000
    global.DATABASE.data.users[m.sender].pet += 2
    global.DATABASE.data.users[m.sender].legendary += 1
    global.DATABASE.data.users[m.sender].diamond += 3
    global.DATABASE.data.users[m.sender].botol += 10
    global.DATABASE.data.users[m.sender].kardus += 10
    global.DATABASE.data.users[m.sender].kaleng += 10
    global.DATABASE.data.users[m.sender].anggur += 5
    global.DATABASE.data.users[m.sender].jeruk += 5
    global.DATABASE.data.users[m.sender].apel += 5
    global.DATABASE.data.users[m.sender].pisang += 5
    global.DATABASE.data.users[m.sender].mangga += 5
    global.DATABASE.data.users[m.sender].lastcodereg = new Date * 1
    chatnye =`Selamat kamu mendapatkan :\n+1000 Exp ✨\n+500 Money 💹\n+2 Limit 🎫\n+1000 Tabungan 💳\n+2 Pet Crate 📫\n+1 Legendary 🧰\n+3 Diamond 💎\n+10 Kaleng 🥫\n+10 Kardus 📦\n+10 Botol 🍾\n+5 Anggur 🍇\n+5 Jeruk 🍊\n+5 Apel 🍎\n+5 Mangga 🥭\n+5 Pisang 🍌`
   itsu.reply(m.chat, chatnye, m)
} else itsu.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
        itsu.reply(m.chat, `*「 KODE TIDAK VALID 」*`, m)
    }
}

handler.command = /^(codereg)$/i
handler.register = true
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}