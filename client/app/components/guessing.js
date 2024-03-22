import styles from "./guessing.module.css";

// Guessing - Render current event to guess.
export default function Guessing({index, events}) {
  const markerIndex = index - 1;
  const guessingEvent = events.slice(1);
  console.log("marker index: ", markerIndex);
  console.log("guessing event: ", guessingEvent);

  return (
    <div className={styles.guessing}>
      <hr />
    </div>
  );
}
