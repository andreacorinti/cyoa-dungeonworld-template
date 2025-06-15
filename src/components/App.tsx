import { useGameStore } from "../store/useGameStore";
import { MainMenu } from "./MainMenu";
import { CharacterCreationScreen } from "./CharacterCreationScreen";
import { StoryScreen } from "./StoryScreen";

export const App = () => {
  const screen = useGameStore((state) => state.screen);

  switch (screen) {
    case "menu":
      return <MainMenu />;
    case "create-character":
      return <CharacterCreationScreen />;
    case "story":
      return <StoryScreen />;
    default:
      return <div>Schermata non trovata</div>;
  }
};
