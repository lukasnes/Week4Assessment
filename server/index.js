const express = require("express");
const cors = require("cors");
const app = express();
const names = []
const {
  changeName,
  deleteName,
  doThis
} = require("./ctrl.js")

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req,res) => {
  const fortunes = [
    "A golden egg of opportunity falls into your lap this month.",
    "A hunch is creativity trying to tell you something.",
    "A short pencil is usually better than a long memory any day.",
    "An acquaintance of the past will affect you in the near future.",
    "Change is happening in your life, so go with the flow!",
    "Don't just think, act!",
    "Every flower blooms in its own sweet time.",
    "Every wise man started out by asking many questions.",
    "Help! I'm being held prisoner in a chinese bakery!",
    "It is better to be an optimist and proven a fool than to be a pessimist and be proven right."
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.post("/api/toDoList", doThis)
app.put("/api/updateName", changeName)
app.delete("/api/deleteName/:name", deleteName)

app.listen(4000, () => console.log("Server running on 4000"));
