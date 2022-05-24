// const compression = require('compression');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const http = require("http");
const cors = require("cors");
const LeadAllocation = require("./modules/LeadAllocation/Route");
const conf = require("./env_config");
global.appRoot = path.resolve(__dirname);
var app = express();

app.set("port", conf.PORT);

app.use(cors());


app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);

app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

app.use("/api/v1/ruleengine", LeadAllocation);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});


app.use(function (err, req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,access_token, api_key, content-type,versions"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("X-XSS-Protection", "1; mode=block");

  next();
});

global.app = app;

var startServer = http.createServer(app).listen(app.get("port"), function () {
  //console.log("Server connected on port :", app.get("port"));
  //console.log("Database Connected :", conf.SQL_URL);
  startInitialProcess();
});

async function startInitialProcess() {
  let client;
  try {
    ruleengineclient = await MongoClient.connect(conf.MONGO_URL_RULE.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: conf.MONGO_URL_RULE.user,
        password: conf.MONGO_URL_RULE.password
      }
    });
    ruleenginedb = ruleengineclient.db(conf.MONGO_URL_RULE.collection);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

process.on("message", function (message) {
  //console.log("Received signal : " + message);
  if (message === "shutdown") {
    startServer.close();
    setTimeout(function () {
      process.exit(0);
    }, 15000);
  }
});
