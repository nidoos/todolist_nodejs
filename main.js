const { urlencoded } = require("express");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var indexRouter = require('./routes/index');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false }, () => {
    console.log("Conncted to db");
    app.listen(3000, () => {
        console.log("Server Up and Running")
    });
});

app.use("/static", express.static("public"));
app.use(urlencoded({ extended: true }));    //body-parser
app.set("view engine", "ejs");

app.use('/', indexRouter);

/* app.post('/', (req, res) => {
    console.log(req.body);
})
 */
