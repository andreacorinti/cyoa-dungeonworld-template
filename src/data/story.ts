export type Choice = {
  text: string;
  nextNodeId: string;
  action?: (gameState: GameState) => void;
};

export type StoryNode = {
  id: string;
  text: string;
  choices: Choice[];
};

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "Sei Occhialino, un hacker che lavora per il sottobosco digitale. Ti è arrivato un messaggio criptato: 'La chiave è nei server abbandonati'. Vuoi proseguire?",
    choices: [
      {
        text: "Sì, entro nel server",
        nextNodeId: "server-room"
      },
      {
        text: "No, aspetto",
        nextNodeId: "wait"
      }
    ]
  },
  "server-room": {
    id: "server-room",
    text: "Entri nel server abbandonato. Un sistema ti chiede di decifrare un codice. Usa il tuo Sharp!",
    choices: [
      {
        text: "Provo a decifrare",
        nextNodeId: "dice-roll"
      }
    ]
  },
  "dice-roll": {
    id: "dice-roll",
    text: "Tira i dadi per decifrare il codice.",
    choices: [
      {
        text: "Lancia i Dadi",
        nextNodeId: "result"
      }
    ]
  },
  result: {
    id: "result",
    text: "Hai lanciato i dadi... il risultato determinerà il tuo successo.",
    choices: []
  }
};
