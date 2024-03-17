import styles from "./timeline.module.css";

// Timeline - Render timeline.
export default function Timeline({index, events}) {
  console.log("pwd: ", process.cwd());

  const timeline = events.map((event) => {
    return (
      <div
        key={event.id}
        className={styles.box_event}
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", event.id);
        }}
      >
        <div className={styles.year}>{event.displayYear}</div>
        <div className={styles.event_data}>
          <img src={"images/" + event.image} alt="" />
          <div className={styles.description}>{event.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.box_events}>
      <div className={styles.label}>BEFORE</div>
      {timeline}
      <div
        onDrop={(e) => {
          e.preventDefault();
          console.log("Dropped: ", e.dataTransfer.getData("text/plain"));
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        className={styles.box_answers}
      >
        TBD
      </div>
      <div className={styles.label}>AFTER</div>
    </div>
  );
}
