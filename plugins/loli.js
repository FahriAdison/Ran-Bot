let fetch = require('node-fetch')
let handler = async (m, { itsu, usedPrefix, command }) => {
   heum = await fetch(`https://api.lolhuman.xyz/api/random/loli?apikey=Deffbotz`)
   if (!heum) throw json
    json = await heum.buffer()
   itsu.sendButtonImg(m.chat, json, 'Pedo Pedo', '©Ran', 'NEXT', `${usedPrefix + command}`, m)
}
    handler.help = ['loli']
    
    handler.tags = ['anime']
    
    handler.command = /^(loli)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler
    