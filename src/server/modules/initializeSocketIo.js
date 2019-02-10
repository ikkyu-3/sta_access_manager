// @flow
import SocketIo from "socket.io";
import NfcpyId from "node-nfcpy-id";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

const nfc = new NfcpyId().start();

function initializeSocketIo(server: Server) {
  const io: SocketIo.Server = SocketIo(server);
  io.on("connection", (socket: SocketIo.Socket) => {
    // sound
    socket.on("sound", async id => {
      switch (id) {
        case "SUCCESS":
          await exec("mpg321 ./assets/music/decision1.mp3");
          break;
        case "ERROR":
          await exec("mpg321 ./assets/music/warning1.mp3");
          break;
        default:
          await exec("mpg321 ./assets/music/warning2.mp3");
          break;
      }
    });
    // touch scan
    nfc.on("touchstart", card => {
      socket.emit("scan", card.id);
    });
  });
}
export default initializeSocketIo;
