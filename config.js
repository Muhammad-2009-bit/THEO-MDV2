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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_02_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4TVJORk1oRUZlMVZQTktTOVI4bEEvZXozWC96RHFDQXloby9JN05rYnlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTI2NzAzMjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJFMEMzNDVDRjQxRjI2QUQ5NkY3MjVDODU4MkJBNzhCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTYwNTc1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwU3VRNUFlaFFCbUI2Tk9ra2dVX3lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhZjdlYTA5LWEzNmEtNGNkZC1hZjNlLTQzMTc2NjA3YzJhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICA3OSxcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDk2LFxuICAgICAgMjIyLFxuICAgICAgMTg0LFxuICAgICAgMjEwLFxuICAgICAgMjMsXG4gICAgICAxODYsXG4gICAgICA4MSxcbiAgICAgIDE0NixcbiAgICAgIDE5NSxcbiAgICAgIDE4MyxcbiAgICAgIDIzNyxcbiAgICAgIDE5MCxcbiAgICAgIDQ1LFxuICAgICAgMzEsXG4gICAgICAyOSxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxMjAsXG4gICAgICAxNzksXG4gICAgICAyMDYsXG4gICAgICAxOCxcbiAgICAgIDIzNSxcbiAgICAgIDE3NSxcbiAgICAgIDQ1LFxuICAgICAgMTE1LFxuICAgICAgNDAsXG4gICAgICA5OCxcbiAgICAgIDE5MCxcbiAgICAgIDIxNSxcbiAgICAgIDE4MixcbiAgICAgIDE0MCxcbiAgICAgIDc0LFxuICAgICAgNTMsXG4gICAgICAzMSxcbiAgICAgIDQyLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlhHTU44QVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTI2NzAzMjI6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM2MDA1MTQ3MDc0NjgzOjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUSWcra0dFUFhnM3JnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibnBFcGhZWVVNaWlHdlJlZk0vZ0lBVmxMT2FEU2R6YmlWSnB6Q0FnV2lUYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUQzBIN05mOTFRSytDLzZMR2xXRXdmYmVrd2FhU0lrc3o2VmVWYmRMVHc0MTdrSUpJY2YvRkozcjRSYTAwb1RCVGgrZkxzb3B1RGI3a0FWZGJYOFlEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrdm1FNjdmaFcxUmg3Y3VaSVZmeTJuUTM2MFZvQ01TdWdTc0NDamRTMUU0bStNN3FGQnlkclA4aytjVTRNVTFKVEpwNkFHbVdNOW83b0VZWGdhK2hpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEyNjcwMzIyOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NjA1NzUzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" //PUT SESSION-ID HERE


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
