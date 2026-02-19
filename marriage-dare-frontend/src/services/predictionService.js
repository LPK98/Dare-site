export async function getPrediction({
  name = "",
  age = "",
  personality = "Romantic",
}) {
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
