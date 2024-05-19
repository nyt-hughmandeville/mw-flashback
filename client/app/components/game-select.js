"use client";

import styles from "./game-select.module.css";
import Select from "react-select";

// GameSelect - Render game selection dropdown.
export default function GameSelect({game, games, setGame}) {
  // Shared style for all select lists.
  const selectStyles = {};

  return (
    <div className={styles.game_select}>
      <Select
        instanceId="game_list"
        isClearable={false}
        isMulti={false}
        isSearchable={true}
        name="game"
        onChange={setGame}
        options={games}
        placeholder="Select a game"
        styles={selectStyles}
        value={game}
      />
    </div>
  );
}
