let handler = (m, { itsu, usedPrefix, command, text }) => {
  itsu.tembak = itsu.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(itsu.tembak.tembak.indexOf("🤠") == 0) {
      itsu.tembak.tembak = kiri[0]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 1) {
      itsu.tembak.tembak = kiri[0]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 2) {
      itsu.tembak.tembak = kiri[1]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 3) {
      itsu.tembak.tembak = kiri[2]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 4) {
      itsu.tembak.tembak = kiri[3]
    }

    let pos = itsu.tembak.musuh.join(" ") + "\n\n\n" + itsu.tembak.tembak.join(" ")

    itsu.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(itsu.tembak.musuh.indexOf("🥷") === itsu.tembak.tembak.indexOf("🤠")) return itsu.sendButton(m.chat, pos, "©LitRHap", "Tembak", `${usedPrefix}${command} tembak`)
    return itsu.send2Button(m.chat, pos, "©LitRHap", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/kanan/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(itsu.tembak.tembak.indexOf("🤠") == 0) {
      itsu.tembak.tembak = kanan[1]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 1) {
      itsu.tembak.tembak = kanan[2]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 2) {
      itsu.tembak.tembak = kanan[3]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 3) {
      itsu.tembak.tembak = kanan[4]
    } else if(itsu.tembak.tembak.indexOf("🤠") == 4) {
      itsu.tembak.tembak = kanan[4]
    }

    let pos = itsu.tembak.musuh.join(" ") + "\n\n\n" + itsu.tembak.tembak.join(" ")

    itsu.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(itsu.tembak.musuh.indexOf("🥷") === itsu.tembak.tembak.indexOf("🤠")) return itsu.sendButton(m.chat, pos, "©LitRHap", "Tembak", `${usedPrefix}${command} tembak`)
    return itsu.send2Button(m.chat, pos, "©LitRHap", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/tembak/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    if(itsu.tembak.tembak.indexOf("🤠") == itsu.tembak.musuh.indexOf("🥷")) {
      itsu.tembak = {}
      global.DATABASE.data.users[m.sender].money += 1000
      m.reply("Kamu menang!\n\nUang += 1000")
    }
    itsu.deleteMessage(chat, { fromMe, id, remoteJid: chat })
  } else {
    randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
    randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    musuh = random(randMusuh)
    aku = random(randAku)

    itsu.tembak.musuh = musuh
    itsu.tembak.tembak = aku

    let pos = itsu.tembak.musuh.join(" ") + "\n\n\n" + itsu.tembak.tembak.join(" ")

    if(itsu.tembak.musuh.indexOf("🥷") === itsu.tembak.tembak.indexOf("🤠")) return itsu.sendButton(m.chat, pos, "©LitRHap", "Tembak", `${usedPrefix}${command} tembak`)
    return itsu.send2Button(m.chat, pos, "©Muhammad Restu", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  }
}
handler.help = ['koboy']
handler.tags = ['rpg']
handler.command = /^(koboy)/i

module.exports = handler


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
