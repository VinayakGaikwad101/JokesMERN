import express from "express";

// record
import path from "path";

const app = express();

// record
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/", (req, res) => {
  res.send("Server is up and running successfully bro");
});

const joker = [
  {
    id: 1,
    title: "This is the 1st joke",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    title: "This is the 2nd joke",
    content: "Why did the bicycle fall over? Because it was two-tired!",
  },
  {
    id: 3,
    title: "This is the 3rd joke",
    content: "Why don't some fish play piano? They’re afraid of the keys!",
  },
  {
    id: 4,
    title: "This is the 4th joke",
    content:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  },
  {
    id: 5,
    title: "This is the 5th joke",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 6,
    title: "This is the 6th joke",
    content:
      "Why don't we tell secrets on a farm? Because the potatoes have eyes, the corn has ears, and the beans stalk.",
  },
  {
    id: 7,
    title: "This is the 7th joke",
    content: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  {
    id: 8,
    title: "This is the 8th joke",
    content: "What do you call fake spaghetti? An impasta!",
  },
  {
    id: 9,
    title: "This is the 9th joke",
    content: "Why was the math book sad? Because it had too many problems.",
  },
  {
    id: 10,
    title: "This is the 10th joke",
    content: "What do you call a bear with no teeth? A gummy bear!",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(joker);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
