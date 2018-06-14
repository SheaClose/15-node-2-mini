require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  dbInstance.new_planes();
  app.set("db", dbInstance);
});

app.get("/api/planes", (req, res) => {
  let db = req.app.get("db");
  db.get_planes().then(planes => {
    return res.status(200).json(planes);
  });
});

app.post("/api/planes", (req, res) => {
  let db = req.app.get("db");
  db.query(
    "insert into airplanes (plane_type,passenger_count) values ($1, $2); select * from airplanes",
    [req.body.plane_type, req.body.passenger_count]
  ).then(planes => res.status(200).json(planes));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
