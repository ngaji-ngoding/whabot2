const {
  connectionHandler,
  messagesHandler,
  useSingleFileAuthState,
} = require("./utilities/eventsHandler");
const { default: makeWASocket } = require("@adiwajshing/baileys");
const { state, saveState } = useSingleFileAuthState("./sessions.json");
const P = require("pino");

function startBot() {
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    Logger: P({ level: "debug" }),
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
