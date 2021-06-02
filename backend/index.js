
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors")

const listings = require("./routes/listings");

const users = require("./routes/users");

const auth = require("./routes/auth");
const my = require("./routes/my");

const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());


app.use("/api/listings", listings);

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const client = require("mongodb").MongoClient;
const url ="  ";

mongoose.connect(
  url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB Connected");
  }
);


app.use(express.json());



const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
