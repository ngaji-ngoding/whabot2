const {
  connectionHandler,
  messagesHandler,
  useSingleFileAuthState,
} = require("./utilities/eventsHandler");
const { default: makeWASocket } = require("@adiwajshing/baileys");
require("dotenv").config();
const { state, saveState } = useSingleFileAuthState("./sessions.json");
const P = require("pino");

console.log(process.env);
function startBot() {
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    logger: P({ level: "silent" }),
  });
  //connection
  sock.ev.on("connection.update", (up) =>
    connectionHandler(sock, up, startBot)
  );
  // state atau session
  sock.ev.on("creds.update", saveState);
  // autorespond
  sock.ev.on("messages.upsert", (m) => messagesHandler(sock, m));
}

startBot();
