import express from "express";
import bodyParser from "body-parser";

const app = express();
app.listen(20001);
app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/:session/:corner_id", (req, res) => {
    
});