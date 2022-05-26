const {
  Boom
} = require("@hapi/boom");
const {
  DisconnectReason,
  useSingleFileAuthState
} = require("@adiwajshing/baileys");

//connection
function connectionHandler(sock, up, startBot) {
  const {
    lastDisconnect,
    connection
  } = up;
  if (connection) {
    console.log("connection status: "+connection);
  }
  if (connection === "close") {
    let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
    console.log(reason);
    console.log(DisconnectReason);
    if (reason === DisconnectReason.badSession) {
      console.log(`bad file session, please delete it. dan scan again`);
    } else if (reason === DisconnectReason.connectionClosed) {
      console.log("connection closed,, reconnecting....,");
      startBot();
    } else if (reason === DisconnectReason.Lost) {
      console.log("connection lost from server, reconnecting.....");
      startBot();
    } else if (reason === DisconnectReason.connectionReplaced) {
      console.log("connection replaced, another new session opened, please close current session first");
    } else if (reason === DisconnectReason.loggedOut) {
      console.log("device loged out, please delete session and scan again");
      sock.logout();
    } else if (reason === DisconnectReason.restartRequired) {
      console.log("restart Required, restarting....");
      startBot();
    } else if (reason === DisconnectReason.timedOut) {
      console.log("connection time out, reconnecting...");
      startBot();
    } else {
      sock.end('unknown DisconnectReason')
    }
  }
}

//messages
function messagesHandler(sock, {
  messages, type
}) {
  let pesan;
  let sender = messages[0].key.remoteJid;
  if (messages[0].message) {
    pesan = messages[0].message.conversation;
  }
  if (sender === 'status@broadcast' || messages[0].key.fromMe) return;
  if (pesan === 'ping') {
    sock.sendMessage(sender, {
      text: 'pong'
    });
  }
  if (pesan === 'hallo') {
    sock.sendMessage(sender, {
      text: 'haaaiiii'
    });
  }
  if (pesan === 'menu') {
    sock.sendMessage(sender, {
      text: 'ini daftar menu',
      title: 'menu',
      buttonText: 'tampilkan menu',
      sections: [{
        title: 'menus',
        rows: [{
          title: 'kopi',
          rowId: '1'
        },
          {
            title: 'susu',
            rowId: '2'
          }]
      }]
    });
  }
}
module.exports = {
  connectionHandler,
  messagesHandler,
  useSingleFileAuthState
}
