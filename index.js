const {
  connectionHandler,
  messagesHandler,
  useSingleFileAuthState
} = require("./utilities/eventsHandler");
const {
  default: makeWASocket
  } = require("@adiwajshing/baileys");

  const {
    state,
    saveState
  } = useSingleFileAuthState("./sessions.json");

  function startBot(argument) {
    const sock = makeWASocket({
      printQRInTerminal: true,
      auth: state
    });
    console.log(sock);
    //connection
    sock.ev.on("connection.update", (up)=>connectionHandler(sock, up, startBot));
    // state atau session
    sock.ev.on("creds.update", m=>console.log(m));
    // autorespond
    sock.ev.on("messages.upsert",
      (m)=> messagesHandler(sock, m))
  }

  startBot();
