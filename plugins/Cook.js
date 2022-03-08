let { MessageType } = require('@adiwajshing/baileys')
//BY RIZKY ADI∅
//DONT DELETE THIS CREDIT
let handler  = async (m, { itsu, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let msk= (args[0] || '').toLowerCase()
let cok = `
Please choose what to cook🍳

🍖 ⟩ ${usedPrefix}ayamb *[ to cook grilled chicken ]*
🍗 ⟩ ${usedPrefix}ayamg *[ to cook fried chicken]*
🍣${usedPrefix}leleg
🍣${usedPrefix}leleb *[ lele bakar ]*
🍖${usedPrefix}sapir
🍖${usedPrefix}ssapi [ to cook beef steak ]

typing command↓
${usedPrefix + command } sapir

Untuk makan ${usedPrefix}eat ayamg
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayamb':
            if (global.DATABASE.data.users[m.sender].ayam >= count * 1) {
                           global.DATABASE.data.users[m.sender].ayam >= count * 1
                            global.DATABASE.data.users[m.sender].ayam -= count * 1
                            global.DATABASE.data.users[m.sender].ayamb += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${count } ayam bakar🍖`, m)
                       } else itsu.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break

                  case 'sapir':
            if (global.DATABASE.data.users[m.sender].ayam >= count * 1) {
                            global.DATABASE.data.users[m.sender].sapi >= count * 1
                            global.DATABASE.data.users[m.sender].sapi -= count * 1
                            global.DATABASE.data.users[m.sender].sapir += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${ count } Rendang 🍜`, m)
                       } else itsu.reply(m.chat, `hewan yg kamu dapatkan tidak cukup untuk dimasak`, m)
break
                   case 'ayamg':
            if (global.DATABASE.data.users[m.sender].ayam >= count * 1) {
                           global.DATABASE.data.users[m.sender].ayam >= count * 1
                            global.DATABASE.data.users[m.sender].ayam -= count * 1
                            global.DATABASE.data.users[m.sender].ayamg += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${ count } ayam goreng🍗`, m)
                       } else itsu.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                        case 'leleg':
            if (global.DATABASE.data.users[m.sender].lele >= count * 1) {
                          global.DATABASE.data.users[m.sender].lele >= count * 1
                            global.DATABASE.data.users[m.sender].lele -= count * 1
                            global.DATABASE.data.users[m.sender].leleg += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${ count } lele goreng🍤`, m)
                       } else itsu.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                        case 'leleb':
            if (global.DATABASE.data.users[m.sender].lele >= count * 1) {
                            global.DATABASE.data.users[m.sender].lele >= count * 1///DONT DELETE THIS
                            global.DATABASE.data.users[m.sender].lele -= count * 1
                            global.DATABASE.data.users[m.sender].leleb += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${ count } lele bakar🐟`, m)
                       } else itsu.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
             case 'ssapi':
            if (global.DATABASE.data.users[m.sender].sapi >= count * 1) {
                            global.DATABASE.data.users[m.sender].sapi >= count * 1///DONT DELETE THIS
                            global.DATABASE.data.users[m.sender].sapi -= count * 1
                            global.DATABASE.data.users[m.sender].ssapi += count * 1
                            itsu.reply(m.chat, `Succes memmasak ${ count } steak sapi`, m)
                       } else itsu.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                default:
                    return itsu.sendButton( m.chat, cok, wm, `Makan`, `.eat ayamb 1`)
            }
        }
    } catch (e) {
        itsu.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != itsu.user.jid)) {
                itsu.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <Cook> <args>']
handler.tags = ['rpg']

handler.command = /^(masak|cook)$/i
module.exports = handler
