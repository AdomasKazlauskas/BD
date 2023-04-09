const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { log } = require("console");
// const md5 = require("md5");

const app = express();
const port = 3003;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post("/post", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.delete("/delete", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.put("/put", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(port, () => {
  console.log(`SERVER is on port number: ${port}`);
});

app.get("/cards", (req, res) => {
  let allData = fs.readFileSync("./data/cards.json", "utf8");
  allData = JSON.parse(allData);
  res.json(allData);
});

app.post("/cards", (req, res) => {
  const cardFile = fs.readFileSync("./data/cards.json", "utf8");
  const cards = JSON.parse(cardFile);

  const newCard = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
    totalCash: req.body.totalCash,
    raisedCash: 0,
    donors: [],
  };

  cards.push(newCard);
  fs.writeFileSync("./data/cards.json", JSON.stringify(cards), "utf8");

  res.json({
    message: { text: "New card is saved", type: "success" },
  });
});

app.patch("/cards", (req, res) => {
  const cardId = req.body.id;
  const donation = Number(req.body.donation);
  const name = req.body.name;
  // read the JSON file
  const cards = JSON.parse(fs.readFileSync("./data/cards.json", "utf8"));

  // find the user with the matching ID
  const card = cards.find((card) => card.id === cardId);

  // if user is not found, return an error
  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  // update the user's cash
  card.raisedCash += donation;
  card.donors.push({ name, donation });

  // write the updated data back to the JSON file
  fs.writeFileSync("./data/cards.json", JSON.stringify(cards, null, 2));

  // return the updated user data
  res.json(card);
});
