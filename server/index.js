const express = require("express");
const cors = require("cors");
const app = express();

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


const names = []
const theLost = []
let id = 1

app.post("/api/toDoList", (req,res) => {
  let { name } = req.body
  
  let newName = {
    id,
    name: name
  }
  for(i = 0; i < names.length; i++) {
    if(names[i].name === newName.name){
      res.status(406).send("That name already exists")
      return
    }
  }
  names.push(newName)     
  id++
  res.status(200).send(names)

})
app.put("/api/updateName", (req,res) => {
  const {check,update} = req.body
  console.log(check)
  console.log(names)
  for(i = 0; i < names.length; i++) {
    if(check === names[i].name){
      for(j = 0; j < names.length; j++) {
        if(update === names[j].name){
          res.status(400).send("That name already exists")
          return
        }
      }
      names[i].name = update
      res.status(200).send(names)
    }
  }
})
app.delete("/api/deleteName/:id", (req,res) => {
  const nameId = +req.params.id
  console.log(nameId)

  const tgtInd = names.findIndex(nameObj => {
    return nameObj.id === nameId
  })
  console.log(tgtInd)
  id--
  const removed = names.splice(tgtInd, 1)
  theLost.push(removed[0])
  res.status(200).send([removed[0], names])
})
app.get("/api/theLost", (req,res) => {
  res.status(200).send(theLost)
})

app.listen(4000, () => console.log("Server running on 4000"));
