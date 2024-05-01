import {cx} from "pretty-lights";
import styles from "./timeline.module.css";

// Timeline - Render timeline.
export default function Timeline({index, events}) {
  let timeline = [];

  const displayEvents = events.slice(0, index + 1).sort(compareYear);
  for (let i = 0; i < displayEvents.length; i++) {
    const event = displayEvents[i];

    // Push before event drop zone.
    timeline.push(
      <div
        key={"drop-before-" + i}
        data-i={i}
        onDrop={(e) => {
          e.preventDefault();
          console.log("Dropped: ", e.currentTarget.dataset.i);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        className={styles.box_drop}
      >
        Tap to place here
      </div>
    );

    let yearClasses = [styles.year];
    if (event.status === "correct") {
      yearClasses.push(styles.correct);
    }
    if (event.status == "incorrect") {
      yearClasses.push(styles.incorrect);
    }

    // Push event.
    timeline.push(
      <div key={"event-" + i} className={styles.box_event} draggable="false">
        <div className={cx(yearClasses)}>{event.displayYear}</div>
        <div className={styles.event_data}>
          <img src={"images/" + event.image} alt="" />
          <div className={styles.description}>{event.description}</div>
        </div>
      </div>
    );
  }

  // Push last drop zone.
  timeline.push(
    <div
      key={"drop-last"}
      data-i={displayEvents.length}
      onDrop={(e) => {
        e.preventDefault();
        console.log("Dropped: ", e.currentTarget.dataset.i);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={styles.box_drop}
    >
      Tap to place here
    </div>
  );

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
