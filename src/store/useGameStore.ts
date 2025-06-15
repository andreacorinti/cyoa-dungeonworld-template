import { create } from "zustand";

interface GameState {
  screen: "menu" | "create-character" | "story";
  currentNodeId: string;
  character: Character | null;
  log: string[];
  saveGame: () => void;
  loadGame: () => void;
  setScreen: (screen: GameState["screen"]) => void;
  setCurrentNodeId: (id: string) => void;
  setCharacter: (character: Character) => void;
  updateLog: (entry: string) => void;
}

export type Character = {
  name: string;
  gender: string;
  class: string;
  stats: Record<string, number>;
};

export const useGameStore = create<GameState>((set) => ({
  screen: "menu",
  currentNodeId: "start",
  character: null,
  log: [],

  saveGame: () => {
    const state = useGameStore.getState();
    localStorage.setItem("savedGame", JSON.stringify(state));
  },

  loadGame: () => {
    const saved = localStorage.getItem("savedGame");
    if (saved) {
      set(JSON.parse(saved));
    }
  },

  setScreen: (screen) => set({ screen }),
  setCurrentNodeId: (id) => set({ currentNodeId: id }),
  setCharacter: (character) => set({ character }),

  updateLog: (entry) =>
    set((state) => ({ log: [...state.log, entry] })),
}));
