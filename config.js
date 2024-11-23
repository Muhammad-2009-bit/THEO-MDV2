const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_32_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZzclFwdFlZamd6bmJMbjd0ZWkxZ3VXMDBGZzA2SUNrTWdwL1VDSTNua2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1BTWdvcnduVE9HeVZiajBFY1o4MGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNlMjRjZTYtY2MzZC00M2NiLWI5NjctYWZjNTZiMjdlMTIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE1MSxcbiAgICAgIDk1LFxuICAgICAgNzksXG4gICAgICA3LFxuICAgICAgMTgzLFxuICAgICAgMjQ3LFxuICAgICAgNixcbiAgICAgIDIzNyxcbiAgICAgIDE3NixcbiAgICAgIDIyOSxcbiAgICAgIDE4NyxcbiAgICAgIDE1MyxcbiAgICAgIDI5LFxuICAgICAgMTAzLFxuICAgICAgMTUxLFxuICAgICAgMTEsXG4gICAgICAyMzEsXG4gICAgICAxMDAsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAzMSxcbiAgICAgIDE4MyxcbiAgICAgIDEyOSxcbiAgICAgIDU0LFxuICAgICAgNTEsXG4gICAgICAxOTUsXG4gICAgICA2MixcbiAgICAgIDI0NixcbiAgICAgIDE1LFxuICAgICAgMjQ1LFxuICAgICAgMTg1LFxuICAgICAgMTg5LFxuICAgICAgMTk4LFxuICAgICAgOTgsXG4gICAgICAxNjEsXG4gICAgICA1MyxcbiAgICAgIDQzLFxuICAgICAgNDcsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIySE1GWEtHU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzMzA2ODMxNDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODM3MjIyMTY5ODg3NzY6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9hazVrRkVPUDNpTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3RUh5RElxUlZaWDNHc1J1dG1JY05TRGg4Z2ZLRFg2RHJiQzIzakZsbmpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZheDZpcUptYW0rdEJoWk5UUjhqekdrS0pQTFJYV0NUQ0dvMGZReFg5MnVzUjVOeERzamdBZWpwNVpnUVB3ZVdwTnVlU092MEZaM2RhVlZOcU9taUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRIbEdYSUY3MmxTZFFnb3I4akxURmozL2l1UDV0WDVLV3N6Vk9ub25Hd3BsRk1sR3RDR0FQQnVOckhvYnowK0laNWZsNkhWeEV2cWhQU1k2ek9FY2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzMwNjgzMTQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM5Mzk2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
