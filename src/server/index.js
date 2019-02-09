// @flow
import type { $Application } from "express";

import path from "path";
import http from "http";
import express from "express";
import initializeSocketIo from "./modules/initializeSocketIo";

const app: $Application = express();
app.use(express.static(path.join(__dirname, "public")));

const server: Server = http.createServer(app);
initializeSocketIo(server);

server.listen(3000);
