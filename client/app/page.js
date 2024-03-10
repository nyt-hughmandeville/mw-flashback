"use client";

import data from "../data/quiz-01.json";
import styles from "./page.module.css";

export default function Home() {
  const events = data.map((event) => {
    return (
      <div
        key={event.id}
        className={styles.box_event}
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", event.id);
        }}
      >
        <img src={event.image} alt="" />
        <div className={styles.description}>{event.description}</div>
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <div className={styles.box_events}>
        <div className={styles.label}>BEFORE</div>
        {events}
        <div
          onDrop={(e) => {
            e.preventDefault();
            console.log("Dropped: ", e.dataTransfer.getData("text/plain"));
          }}
          onDragOver={(e) => {
            e.preventDefault();
            //console.log("Dragged over: ", e);
          }}
          className={styles.box_answers}
        >
          TBD
        </div>
        <div className={styles.label}>AFTER</div>
      </div>
    </main>
  );
}
