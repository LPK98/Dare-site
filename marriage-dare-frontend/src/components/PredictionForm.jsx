import React, { useState } from "react";

export default function PredictionForm({ onSubmit, loading }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("Romantic");
  const [comment, setComment] = useState("");

  const clickComments = [
    "Consulting the stars... and my tea leaves ☕️",
    "Spinning the marriage wheel... please hold 🎡",
    "Checking your romantic compatibility with pizza 🍕💕",
    "Whispering to the algorithm... it blushes 🤖❤️",
    "Sharpening the prophecy quill... ✒️",
    "Asking the neighborhood psychic... one sec 🔮",
    "Counting romantic sunsets... almost there 🌇",
    "Summoning Cupid's assistant... loading 🏹",
    "Running dramatic montage... play music 🎬",
    "Consulting ancient marriage scrolls (PDFs) 📜",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // pick a random funny comment to show while predicting
    const c = clickComments[Math.floor(Math.random() * clickComments.length)];
    setComment(c);
    onSubmit({ name, age: Number(age), personality });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          aria-label="Name"
        />
      </label>

      <label>
        Current Age
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="18"
          required
          aria-label="Current Age"
        />
      </label>

      <label>
        Personality
        <select
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          aria-label="Personality"
        >
          <option>Romantic</option>
          <option>Traditional</option>
          <option>Adventurous</option>
          <option>Serious</option>
        </select>
      </label>

      <button
        className="btn"
        type="submit"
        disabled={loading}
        aria-busy={loading}
      >
        {loading && <span className="spinner" aria-hidden="true"></span>}
        {loading ? "Predicting..." : "Predict My Marriage 💍"}
      </button>
      <div className="click-comment" aria-live="polite">
        {comment}
      </div>
    </form>
  );
}
