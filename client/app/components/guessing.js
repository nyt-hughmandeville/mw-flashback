import styles from "./guessing.module.css";

// Guessing - Render current event to guess.
export default function Guessing({index, events}) {
  const event = events[index];

  return (
    <div className={styles.guessing}>
      <div
        key="event-guessing"
        className={styles.box_event}
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", "TBD");
        }}
      >
        <div className={styles.event_data}>
          <img src={"images/" + event.image} alt="" />
          <div className={styles.description}>{event.description}</div>
          <div className={styles.points}>{event.possiblePoints} points</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
