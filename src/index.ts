import express from "express";
import bodyParser from "body-parser";
import getCornerName from "./service/SDSCorner";
import isValidSession from "./service/Sessions";

const app = express();
app.listen(20001);
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/:session/:cornerId", (req, res) => {
  const session: string = req.params.session;
  const cornerId: string = req.params.cornerId;
  isValidSession(session).then(isValid => {
    if (isValid) {
      getCornerName(cornerId)
        .then(cornerName => {
          if (cornerName !== "") {
            res.status(200);
            res.json({
              id: cornerId,
              name: cornerName
            });
            res.end();
          } else {
            res.status(404);
            res.json({
              Error: {
                Message: "404 cornerId Not Found in DB"
              }
            });
            res.end();
          }
        })
        .catch(err => {
          res.status(500);
          res.json({
            Error: {
              Message: "Internal Server Error",
              specific: "Failed to get cornerId from DB",
              reason: err
            }
          });
        });
    } else {
      res.status(403);
      res.json({
        Error: { reason: "Unauthorized SessionId" }
      });
      res.end();
    }
  });
});
