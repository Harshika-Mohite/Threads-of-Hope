let empathyPoints = 0;

const scenarios = {
  start: {
    text: "Choose your era:",
    choices: [
      { text: "Ancient", next: "ancientStart" },
      { text: "Modern", next: "modernStart" }
    ]
  },
  ancientStart: {
    text: "You are a peasant boy in the Ancient Era. The town is raided by bandits. What do you do?",
    choices: [
      { text: "Defend your family", points: 5, next: "ancientOutcome1" },
      { text: "Run to save yourself", points: -2, next: "ancientOutcome2" }
    ]
  },
  ancientOutcome1: {
    text: "You bravely defend your family but suffer injuries. The town recognizes your courage.",
    choices: [{ text: "Continue", next: "end" }]
  },
  ancientOutcome2: {
    text: "You escape unharmed but are shunned by your community for cowardice.",
    choices: [{ text: "Continue", next: "end" }]
  },
  modernStart: {
    text: "You are a young woman in the Modern Era. A colleague is being harassed at work. What do you do?",
    choices: [
      { text: "Stand up for them", points: 5, next: "modernOutcome1" },
      { text: "Ignore the situation", points: -2, next: "modernOutcome2" }
    ]
},
modernOutcome1: {
  text: "Your actions inspire others, and the issue is reported. Your empathy is appreciated.",
  choices: [{ text: "Continue", next: "end" }]
},
modernOutcome2: {
  text: "The harassment continues, and you feel guilty for not intervening.",
  choices: [{ text: "Continue", next: "end" }]
},
end: {
  text: "Your journey ends here. Total Empathy Points: ",
  choices: []
}
};

function displayScenario(scenarioKey) {
const scenario = scenarios[scenarioKey];
const scenarioDiv = document.getElementById("scenario");
const choicesDiv = document.getElementById("choices");

scenarioDiv.textContent = scenario.text;
choicesDiv.innerHTML = "";

scenario.choices.forEach(choice => {
  const button = document.createElement("button");
  button.textContent = choice.text;
  button.onclick = () => {
    if (choice.points !== undefined) empathyPoints += choice.points;
    if (scenarioKey === "end") {
      document.getElementById("score").textContent = `Total Empathy Points: ${empathyPoints}`;
    }
    displayScenario(choice.next);
  };
  choicesDiv.appendChild(button);
});
}

displayScenario("start");
