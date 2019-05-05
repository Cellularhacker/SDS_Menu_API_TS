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

app.get("/:session/:cornerId", (req, res) => {
  const session: string = req.params.session;
  const cornerId: string = req.params.cornerId;
  console.log("Checking the session id is value...");
  isValidSession(session).then(isValid => {
    if (isValid) {
      console.log(`SessionId(${session}) is Valid!`);
      console.log(`Searching CornerId(${cornerId})...`);
      getCornerName(cornerId)
        .then(cornerName => {
          if (cornerName !== "") {
            console.log(`corner id matched! ${cornerId}: ${cornerName}`);
            res.status(200);
            res.json({
              id: cornerId,
              name: cornerName
            });
            res.end();
          } else {
            console.log(`no matched cornerId ${cornerId}`);
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
          console.log(`Failed to get cornerId: ${cornerId}`);
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
      console.log(`Invalid SessionId: ${session}`);
      res.status(403);
      res.json({
        Error: { reason: "Unauthorized SessionId" }
      });
      res.end();
    }
  });
});
