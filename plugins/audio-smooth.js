const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { itsu, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await itsu.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:v "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'"  ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                itsu.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
    } catch (e) {
        throw e
    }
}
handler.help = ['smooth']
handler.tags = ['audio']
handler.command = /^(smooth)$/i

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}