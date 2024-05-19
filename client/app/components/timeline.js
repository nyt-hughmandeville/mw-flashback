import {cx} from "pretty-lights";
import styles from "./timeline.module.css";
import {compareYear} from "../utils/utils";

// Timeline - Render timeline.
export default function Timeline({dragOverZone, events, index, madeGuess, setDragOverZone}) {
  let timeline = [];
  const displayEvents = events.slice(0, index + 1).sort(compareYear);

  for (let i = 0; i < displayEvents.length; i++) {
    const event = displayEvents[i];

    // Push before event drop zone if game isn't over
    if (index < events.length - 1) {
      timeline.push(
        <div
          key={"drop-before-" + i}
          data-i={i}
          onDrop={(e) => {
            e.preventDefault();
            setDragOverZone(-1);
            madeGuess(parseInt(e.currentTarget.dataset.i));
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverZone(parseInt(e.currentTarget.dataset.i));
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setDragOverZone(-1);
          }}
          className={dragOverZone === i ? styles.box_drop_active : styles.box_drop}
        ></div>
      );
    }

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
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{__html: event?.description}}
          />
        </div>
      </div>
    );
  }

  // Push last drop zone if game isn't over
  if (index < events.length - 1) {
    timeline.push(
      <div
        key={"drop-last"}
        data-i={displayEvents.length}
        onDrop={(e) => {
          e.preventDefault();
          setDragOverZone(-1);
          madeGuess(parseInt(e.currentTarget.dataset.i));
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOverZone(parseInt(e.currentTarget.dataset.i));
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOverZone(-1);
        }}
        className={dragOverZone === displayEvents.length ? styles.box_drop_active : styles.box_drop}
      ></div>
    );
  }

  return (
    <div className={styles.box_events}>
      <div className={styles.label}>BEFORE</div>
      {timeline}
      <div className={styles.label}>AFTER</div>
    </div>
  );
}
