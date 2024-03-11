import {cx} from "pretty-lights";
import styles from "./progress-bar.module.css";

// ProgressBar - Render quiz progress bar.
export default function ProgressBar({index, events}) {
  let points = 0;

  const markers = events.map((event, i) => {
    return (
      <div key={i} className={cx(styles.marker, styles.grey)}>
        &nbsp;
      </div>
    );
  });

  return (
    <div className={styles.progress_bar}>
      {index + 1} of {events.length}
      {markers}
      {points} Points
    </div>
  );
}
