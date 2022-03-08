let handler = async (m, { itsu, command, args, text, usedPrefix, DevMode }) => {
    let { spawn } = require('child_process')
    let fs = require('fs')
  const vn =[
  './src/Nya.mp3',
  './src/Nyaa.mp3',
  ]
  hasil = vn[Math.floor(Math.random() * (vn.length))]
  hisil = fs.readFileSync(hasil)
  const anu = {
          key: {
              fromMe: false,
              participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
          },
          message: {
              "productMessage": {
                  "product": {
                      "productImage":{
                          "mimetype": "image/jpeg",
                          "jpegThumbnail": global.thumb
                      },
                      "title": "Simple Menu Bot",
                      "description": "Rikka",
                      "currencyCode": "USD",
                      "priceAmount1000": "999999999999",
                      "retailerId": ">//<",
                      "productImageCount": 1
                  },
                  "businessOwnerJid": `0@s.whatsapp.net`
          }
          }
  }
    itsu.relayWAMessage(itsu.prepareMessageFromContent(m.chat, {
                      "listMessage":  {
                          "title": "Simple Menu Bot.",
                          "description": " \n_©Ran 2022_",
                          "buttonText": `Menu`,
                          "listType": "SINGLE_SELECT",
                          "sections": [
                              { title: '『List Simple Menu』',
                                  "rows": [
                                      {
                                          "title": `『👥』- ʙᴏᴛ ɢʀᴏᴜᴘ `, "description":  `Official Grup Bot`,
                                          "rowId": `${usedPrefix}from`
                                      }, {
                                         "title": `『⌛』-  ʀᴜɴᴛɪᴍᴇ` , "description": `Lama Bot Nya Onglen 🗿`,
                                         "rowId": `${usedPrefix}runtime`
                                      }, {
                                         "title": `『👤』- ᴏᴡɴᴇʀ`,
  "description": `Yang punya bot 🗿`, 
                                         "rowId": `${usedPrefix}owner`
                                      }, {
                                         "title": `『⚙️』- SC `,
  "description": `Esceh No Receh 🗿🤙`, 
                                          "rowId": `${usedPrefix}sc`
                                      }, {
                                          "title": `『📄』- ᴀʙᴏᴜᴛ `,
  "description": `Tentang Bot`, 
                                          "rowId": `${usedPrefix}about`                               
                                      }, { 
                                          "title": `『📱』- sᴛᴀᴛs`,
  "description": `Status Bot`, 
                                          "rowId": `${usedPrefix}stats`
                                      },{
  "title": `『⋮☰』- All Menu`,
  "description": `Tampil keun semua menu nya !`, 
                                         "rowId": `${usedPrefix}404`}
                                  ]
                              }
                          ]
                      }
                   }, {quoted: anu}),{waitForAck: true}
  )
  return itsu.sendMessage(m.chat, hisil, 'audioMessage', {mimetype: 'audio/mp4', quoted: m, ptt: true, duration: 4040404})
  }
  
  handler.help = ['menu','help','?']
  handler.tags = ['main']
  handler.command = /^(menu|help|\?)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  handler.exp = 0
  handler.limit = false
  
  module.exports = handler