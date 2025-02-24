// SCRIPT BY MR KÉVIN TSH
// POWERED BY THE DEAM OF GOKU BOT INC.
// DONATE +243974493520

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")


//========== Setting Owner ==========//
global.owner = "243890432038"
global.owner2 = "50944162237"
global.namaowner = "🌹𝐌𝐑 𝐊𝐄́𝐕𝐈𝐍 𝐓𝐒𝐇🌹"
global.botname = "⚔️𝗣𝗛𝗢𝗥𝗖𝗬𝗦_𝗞𝗥𝗔𝗧𝗢𝗦⚔️"


//======== Setting Bot & Link ========//
global.namabot = "⚔️𝗣𝗛𝗢𝗥𝗖𝗬𝗦_𝗞𝗥𝗔𝗧𝗢𝗦⚔️" 
global.namabot2 = "⚔️𝗖𝗥𝗔𝗦𝗛_𝗞𝗥𝗔𝗧𝗢𝗦⚔️"
global.foother = "🌹𝐌𝐑 𝐊𝐄́𝐕𝐈𝐍 𝐓𝐒𝐇🌹"
global.versibot = "𝟭.𝟬"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f'
global.linksaluran = 'https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f'
global.linkyt = 'https://youtube.com/@alvinblaste...13'
global.linktele = 'https://t.me/MR_KEVIN_TSH'
global.packname = "𝐅𝐌𝐋-𝐆𝐑𝐈𝐌𝐌✨"
global.author = "🌹𝐌𝐑 𝐊𝐄́𝐕𝐈𝐍 𝐓𝐒𝐇🇨🇩"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = true
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "*🎭 Une erreur est survenue.*",
"done": "*Fait avec succès ✅*", 
"wait": "*Le processus est en cours...⏳*", 
"group": "*Cette commande n'est permise uniquement sur un chat de groupe.😥*", 
"private": "Cette commande n'est permise uniquement sur un chat privé.🙂*", 
"admin": "*Seul un administrateur a droit à cette commande.🤷*", 
"adminbot": "*Cette commande ne peut être exécutée si seulement Kratos est admin du groupe.👷*", 
"owner": "*Réservée à mon owner Mr Kévin Tsh uniquement.🙇*", 
"developer": "*Seulement les dev peuvent en avoir accès.👻*", 
"premium": "*Réservée à l'équipe premium de Kratos uniquement.👩‍💻*"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})