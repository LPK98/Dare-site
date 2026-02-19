const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

function makePrediction({ name = "", age = "", personality = "Romantic" }) {
  const predictedMarriageAge = Math.floor(Math.random() * 10) + 24; // 24-33
  const types = [
    "Love Marriage ❤️",
    "Arranged Marriage 👪",
    "Love → Arranged 😅",
    "Secret Marriage 🤫",
  ];
  const marriageType = types[Math.floor(Math.random() * types.length)];
  const message = `${name ? name + ", " : ""}Based on your ${String(
    personality,
  ).toLowerCase()} personality, expect ${marriageType} around age ${predictedMarriageAge}.`;

  return { predictedMarriageAge, marriageType, message };
}

app.post("/predict", (req, res) => {
  const { name, age, personality } = req.body || {};
  const result = makePrediction({ name, age, personality });
  res.json(result);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Prediction API listening on http://localhost:${PORT}`);
});
