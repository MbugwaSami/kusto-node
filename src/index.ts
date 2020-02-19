import debug, { Debugger } from "debug";
import http, { Server } from "http";
import app from "./app";




const logger: Debugger  = debug("log");
const server: Server = http.createServer(app);
const portString: string = process.env.PORT || "5000";
const port: number = parseInt(portString) || 8000;

server.listen(port, async () => {
  logger(`Find me on http://localhost:${port}`);
});
