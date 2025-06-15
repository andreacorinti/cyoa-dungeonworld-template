import { useEffect, useState } from "react";
import { useGameStore } from "../store/useGameStore";
import { storyNodes } from "../data/story";
import { roll2d6 } from "../utils/dice";

export const StoryScreen = () => {
  const { currentNodeId, character, setCurrentNodeId, updateLog } = useGameStore();
  const node = storyNodes[currentNodeId];

  const [resultText, setResultText] = useState("");

  const handleChoiceClick = (choice: any) => {
    if (choice.nextNodeId === "dice-roll") {
      const stat = character?.stats.sharp || 0;
      const { total, rolls } = roll2d6(stat);
      let outcome = "";

      if (total >= 10) outcome = "Successo pieno!";
      else if (total >= 7) outcome = "Successo parziale.";
      else outcome = "Fallimento totale.";

      setResultText(`Dadi: ${rolls.join(" + ")} + ${stat} = ${total}. Risultato: ${outcome}`);
      updateLog(`Tiro di Sharp: ${total} → ${outcome}`);
    }

    setCurrentNodeId(choice.nextNodeId);
  };

  return (
    <div className="story-screen">
      <h2>{currentNodeId}</h2>
      <p>{node.text}</p>
      {resultText && <p><strong>Risultato:</strong> {resultText}</p>}
      <div className="choices">
        {node.choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceClick(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};
