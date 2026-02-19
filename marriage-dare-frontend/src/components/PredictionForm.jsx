import React, { useState } from "react";

export default function PredictionForm({ onSubmit, loading }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("Romantic");
  const [comment, setComment] = useState("");

  const clickComments = [
    "Gazing into the crystal... gentle hums commence 🔮",
    "Polishing the prophecy gem — sparkle incoming ✨",
    "Aligning the love constellations — please wait 🌌",
    "Tuning the Cupid tuner... strings are tightening 🎻🏹",
    "Scrying the future mirrors — reflections observed 🪞",
    "Unrolling the fate tapestry — threads are knitting 🧵",
    "Summoning a dramatic trumpet fanfare... Na na na 🎺",
    "Dipping a quill in moonlight for poetic results 🌙✒️",
    "Asking the stars for spoilers — hush, they're shy ⭐️",
    "Feeding the oracle a cookie — brb 🍪🔮",
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
