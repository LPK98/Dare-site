import React, { useState } from "react";

export default function PredictionForm({ onSubmit, loading }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("Romantic");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
      </label>

      <label>
        Personality
        <select
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
        >
          <option>Romantic</option>
          <option>Traditional</option>
          <option>Adventurous</option>
          <option>Serious</option>
        </select>
      </label>

      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Predicting..." : "Predict My Marriage 💍"}
      </button>
    </form>
  );
}
