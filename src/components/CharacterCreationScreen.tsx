import { useGameStore } from "../store/useGameStore";
import { characterClasses } from "../data/classes";

export const CharacterCreationScreen = () => {
  const setCharacter = useGameStore((state) => state.setCharacter);
  const setScreen = useGameStore((state) => state.setScreen);

  const handleCreate = (className: string) => {
    const selectedClass = characterClasses[className];
    setCharacter({
      name: "John Doe",
      gender: "Altro",
      class: selectedClass.name,
      stats: selectedClass.stats,
    });
    setScreen("story");
  };

  return (
    <div className="character-creation">
      <h2>Scegli la tua Classe</h2>
      {Object.entries(characterClasses).map(([key, cls]) => (
        <button key={key} onClick={() => handleCreate(key)}>
          {cls.name}
        </button>
      ))}
    </div>
  );
};
