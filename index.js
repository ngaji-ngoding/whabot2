const {
  connectionHandler,
  messagesHandler,
  useSingleFileLegacyAuthState
} = require("./utilities/eventsHandler");
const {
  makeWALegacySocket
} = require("@adiwajshing/baileys");
const {
  state,
  saveState
} = useSingleFileLegacyAuthState("./sessions.json");

function startBot(argument) {
  const sock = makeWALegacySocket({
    printQRInTerminal: true,
    auth: state
  });
  //connection
  sock.ev.on("connection.update", (up)=>connectionHandler(sock, up, startBot));
  // state atau session
  sock.ev.on("creds.update",
    saveState);
  // autorespond
  sock.ev.on("messages.upsert",
    (m)=> messagesHandler(sock, m))
}

startBot();