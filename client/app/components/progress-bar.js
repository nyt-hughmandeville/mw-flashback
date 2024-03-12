import {cx} from "pretty-lights";
import styles from "./progress-bar.module.css";

// ProgressBar - Render quiz progress bar.
export default function ProgressBar({index, events}) {
  const markerIndex = index - 1;
  const questionEvents = events.slice(1);

  // Total the points for all correct answers.
  const points = questionEvents.reduce((total, event) => {
    if (event.status === "correct")  {
      return total + event.points;
    }
    return total;
  }, 0);

  const markers = questionEvents.map((event, i) => {
    let classes = [styles.marker];
    if (event.status === "correct") {
      classes.push(styles.correct);
    } else if (event.status === "incorrect") {
      classes.push(styles.incorrect);
    } else {
      classes.push(styles.unanswered);
    }
    if (i === markerIndex) {
      classes.push(styles.active);
    }

    return (
      <div key={i} className={cx(classes)}>
        &nbsp;
      </div>
    );
  });

  return (
    <div className={styles.progress_bar}>
      <div className={styles.index}>
        {markerIndex} of {events.length - 1}
      </div>
      {markers}
      <div className={styles.points}>{points} Points</div>
    </div>
  );
}
