import styles from "./guessing.module.css";

// Guessing - Render current event to guess.
export default function Guessing({index, events}) {
  if (index > events.length - 2) {
    return null;
  }
  const event = events[index + 1];

  let image = event?.image;
  if (image && image.indexOf("http") !== 0) {
    image = "images/" + image;
  }

  return (
    <div className={styles.guessing}>
      <div
        key="event-guessing"
        className={styles.box_event}
        draggable="true"
        onDragStart={(e) => {
          // e.dataTransfer.setData("text/plain", "TBD");
        }}
      >
        <div className={styles.event_data}>
          <img src={image} alt="" />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{__html: event?.description}}
          />
          <div className={styles.points}>{event?.possiblePoints} points</div>
        </div>
      </div>
    </div>
  );
}
