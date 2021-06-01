const { urlencoded } = require("express");
const express = require("express");
const app = express();
var indexRouter = require('./router/index');

app.use("/static", express.static("public"));
app.use(urlencoded({ extended: true }));    //body-parser
app.set("view engine", "ejs");

app.use('/', indexRouter);

app.post('/', (req, res) => {
    console.log(req.body);
})


app.listen(3000, () => {
    console.log("Server Up and Running")
});