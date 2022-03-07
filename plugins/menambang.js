let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { itsu }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].as)
    let _timers = (1800000 - __timers)
    let timers = clockString(_timers) 
let name = m.fromMe ? itsu.user : itsu.contacts[m.sender]
    let user = global.DATABASE.data.users[m.sender]
    let buttons = [
{buttonId: '.inv', buttonText: {displayText: 'inv'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*😴Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar* _${timers}_ *Untuk bisa melanjutkan Menambang*\n`,
    footerText: wm, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE.data.users[m.sender].as > 180000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 10)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`


hsl = `
*《 Hasil Menambang *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}* 》*

 *⛏️ Stone = [ ${zero1} ]*			
 *🧴Potion = [ ${zero2} ]*			 
 *💎 Diamond = [ ${zero3} ]*			 
 *💸 Uang = [ ${zero4} ]*			 
 *💠 Exp = [ ${zero5} ] *			 



_©Ran_
`

global.DATABASE.data.users[m.sender].stone += rbrb1
global.DATABASE.data.users[m.sender].potion += rbrb2
global.DATABASE.data.users[m.sender].diamond += rbrb3
global.DATABASE.data.users[m.sender].money += rbrb4
global.DATABASE.data.users[m.sender].exp += rbrb5


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 30000) 
               
                     setTimeout(() => {
                     m.reply(`*Mengambil*`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply('Boom..........')
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply('Pecah..........')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('Memukul batu.......')
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('⛏️Sedang Menambang.....')
                     }, 0) 
  user.as = new Date * 1
    } else itsu.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['menambang']
handler.tags = ['rpg']
handler.command = /^(nambang|menambang|tambang)$/i
handler.register = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}