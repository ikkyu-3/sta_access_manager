// @flow
import SocketIo from "socket.io";
import NfcpyId from "node-nfcpy-id";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

const nfc = new NfcpyId().start();

function initializeSocketIo(server: Server) {
  const io: SocketIo.Server = SocketIo(server);
  io.on("connection", (socket: SocketIo.Socket) => {
    socket.on("sound", async id => {
      // idで音を変更できる
      switch (id) {
        default:
          await exec("mpg321 ./assets/music/xxx.mp3");
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
