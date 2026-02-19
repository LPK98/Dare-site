import axios from "axios";

export async function getPrediction({
  name = "",
  age = "",
  personality = "Romantic",
}) {
  // Try the backend API first
  try {
    const res = await axios.post(
      "http://localhost:4000/predict",
      { name, age, personality },
      { timeout: 2000 }
    );
    if (res && res.data) return res.data;
  } catch (err) {
    // fall through to local mock
  }

  // Fallback mock (no backend available)
  return new Promise((resolve) => {
    setTimeout(() => {
      const predictedMarriageAge = Math.floor(Math.random() * 10) + 24; // 24-33
      const types = [
        "Love Marriage ❤️",
        "Arranged Marriage 👪",
        "Love → Arranged 😅",
        "Secret Marriage 🤫",
      ];
      const marriageType = types[Math.floor(Math.random() * types.length)];
      const message = `${name ? name + ", " : ""}Based on your ${personality.toLowerCase()} personality, expect ${marriageType} around age ${predictedMarriageAge}.`;

      resolve({ predictedMarriageAge, marriageType, message });
    }, 500);
  });
}
