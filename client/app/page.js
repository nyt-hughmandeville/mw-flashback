"use client";

import data from "../data/quiz-01.json";
import styles from "./page.module.css";

export default function Home() {
  const events = data.map((event) => {
    return (
      <div key={event.id} className={styles.box_event} draggable="true">
        <img src={event.image} alt="" />
        <div className={styles.description}>{event.description}</div>
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <div className={styles.box_events}>
        <div className={styles.lable}>BEFORE</div>
        {events}
        <div droppable="true" className={styles.box_answers}></div>
        <div className={styles.lable}>AFTER</div>
      </div>
    </main>
  );
}
