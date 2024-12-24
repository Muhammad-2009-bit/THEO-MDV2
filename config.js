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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_22_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRxR0NtaFpSTkcweTVINUV4MGMvRGJqa1lDVjVkWVdJcExJblQ1cXpyY2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllEQ1o5SzZ1VE9TSDRwUk14SmVHX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTEyZDRjN2UtMGVmOS00M2ZiLTljZTYtOTg5MDE3YmRhZWYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxNjYsXG4gICAgICAxNDAsXG4gICAgICAyNCxcbiAgICAgIDEwMixcbiAgICAgIDE1MixcbiAgICAgIDY5LFxuICAgICAgMzYsXG4gICAgICA3MixcbiAgICAgIDI1MSxcbiAgICAgIDE5NyxcbiAgICAgIDkyLFxuICAgICAgMTk1LFxuICAgICAgMTk5LFxuICAgICAgMTIzLFxuICAgICAgMTAzLFxuICAgICAgMjA1LFxuICAgICAgNTEsXG4gICAgICAxMzksXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDMsXG4gICAgICA0NCxcbiAgICAgIDIxOCxcbiAgICAgIDU3LFxuICAgICAgMjQ3LFxuICAgICAgMjI5LFxuICAgICAgMTUxLFxuICAgICAgMjM1LFxuICAgICAgMjQ5LFxuICAgICAgNyxcbiAgICAgIDIyMCxcbiAgICAgIDE0NSxcbiAgICAgIDg2LFxuICAgICAgMTMzLFxuICAgICAgNDYsXG4gICAgICAxNzgsXG4gICAgICA5NyxcbiAgICAgIDI1LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZFUkwyTFBDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEyNjcwMzIyOjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNjAwNTE0NzA3NDY4Mzo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLL0lnK2tHRU5HL3E3c0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5wRXBoWVlVTWlpR3ZSZWZNL2dJQVZsTE9hRFNkemJpVkpwekNBZ1dpVGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR3d2aXlUVGFWN2FybkpRWExYaDIyQTdJTENNNEhTWC8vZUFVWXVXTkJLVU1JSlpnSVlSL0RCdVVDcG1FZzM0NnJORzlzMXFMb1F1WVhVYmFMV1BmQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVFOSnUvaGpCa3Y3c1NvUlYvYjdXb1pSK2hFUFgvVXpwaVBVKzlmaEFteUZ3Z0lKaVF2QUN2dk1QdDNBVGhHRHN4eTIvdWI5S0ZCRFNzalZNSGk3Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMjY3MDMyMjo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA1NzM2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs1YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzVhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0dQc3hYUmU4TjE0SUViSzlMQ0NDVWJhR0NkL1hWY1djY1dBU3psOCtFTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODMwODcyMTExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5NzU4Mzk3MDZcIn0iCn0=" //PUT SESSION-ID HERE


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
