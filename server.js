require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");
const {executeTbl } = require("./config/index")
const cors = require("cors")
const cookieParser = require("cookie-parser");

const routerAPI = require("./routes/index")

const middlewareLogRequest = require("./middleware/logs");

const app = express();
const PORT = process.env.PORT;
const server = createServer(app);
executeTbl()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));
app.use(middlewareLogRequest)

app.use(routerAPI)

server.listen(PORT, () => {
   console.log(`Server has been running in http://localhost:${PORT}`);
});