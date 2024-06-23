import "reflect-metadata";
import express from 'express';
// import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from "cors";
import "./lib/env";
// import { createConnection } from 'typeorm';
import createLogger from "logging";
// import connection from "./config/crmconfig";
import routes from './routes';
import path from "path";
import * as http from "http";
import session from 'express-session';
import fs from 'fs';


const PORT = process.env.PORT || 3000;
const logger = createLogger("🚀");

const app = express();

const privateKey = fs.readFileSync("key.pem");
const certificate = fs.readFileSync("cert.pem");
const credentials = {
    key: privateKey,
    cert: certificate
}
const expiryDate = new Date(Date.now() + 60 * 60 * 1000);

const corsOptions: CorsOptions = {
  origin: "*",
  preflightContinue: true,
  credentials: false,
};

app.use(session({
  name: 'session', 
  secret: process.env.JWT_SECRET!,
  resave: true,
  saveUninitialized: true,
  proxy: true,
  // credentials,
//  cookie: { secure: !true }
  cookie: {
    //maxAge: 20000,
    secure: !true,
    httpOnly: true,
    signed: true,
    expires: expiryDate
  }
}))

const server = http.createServer(app);

app.use(cors(corsOptions));
app.use(express.json({
  limit: '150mb'
}));
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (_, res) => {
  res.json({
    msg: "Hello World 👋",
  });
});
if(process.env.NODE_ENV_PR === 'development'){
  app.use("/storage", express.static(('./storage')));
}else{
  app.use("/storage", express.static(path.join(__dirname, 'storage')));
}
app.use("/api", routes);

const start = async () => {
  try {
    //connection;
    server.listen(PORT || 3001, () => {
      logger.info(`Server is running ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();