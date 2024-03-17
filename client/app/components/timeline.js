import styles from "./timeline.module.css";

// Timeline - Render timeline.
export default function Timeline({index, events}) {
  let timeline = [];

  const displayEvents = events.slice(0, index).sort(compareYear);
  for (let i = 0; i < displayEvents.length; i++) {
    const event = displayEvents[i];

    timeline.push(
      <div
        key={"drop-before-" + i}
        onDrop={(e) => {
          e.preventDefault();
          console.log("Dropped: ", e.dataTransfer.getData("text/plain"));
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        className={styles.box_drop}
      >
        Tap to place here
      </div>
    );

    timeline.push(
      <div
        key={"event-" + i}
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
  }

  timeline.push(
    <div
      key={"drop-last"}
      onDrop={(e) => {
        e.preventDefault();
        console.log("Dropped: ", e.dataTransfer.getData("text/plain"));
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={styles.box_drop}
    >
      Tap to place here
    </div>
  );

  /*
  let timeline = events
    .slice(0, index)
    .sort(compareYear).
    .map((event) => {
      return (
        <>
          <div
            key={"dro-before-" + event.id}
            onDrop={(e) => {
              e.preventDefault();
              console.log("Dropped: ", e.dataTransfer.getData("text/plain"));
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            className={styles.box_drop}
          >
            Tap to place here
          </div>
          <div
            key={"event-" + event.id}
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
        </>
      );
    });
    */

  return (
    <div className={styles.box_events}>
      <div className={styles.label}>BEFORE</div>
      {timeline}
      <div className={styles.label}>AFTER</div>
    </div>
  );
}

function compareYear(e1, e2) {
  return e1.year - e2.year;
}
