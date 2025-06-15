import { useGameStore } from "../store/useGameStore";

export const MainMenu = () => {
  const setScreen = useGameStore((state) => state.setScreen);

  return (
    <div className="menu">
      <h1>ShadowNet</h1>
      <p>Un mondo nascosto nel cuore delle città.</p>
      <button onClick={() => setScreen("create-character")}>Nuova Partita</button>
      <button onClick={() => useGameStore.getState().loadGame()}>Carica Partita</button>
    </div>
  );
};
