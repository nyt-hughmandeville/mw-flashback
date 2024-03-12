"use client";

import data from "../data/quiz-01.json";
import ProgressBar from "./components/progress-bar";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
  const [index, setIndex] = useState(1);
  const [events, setEvents] = useState(data);

  const timeline = data.map((event) => {
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
        <img src={event.image} alt="" />
        <div className={styles.description}>{event.description}</div>
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <ProgressBar events={events} index={index} />
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
    </main>
  );
}
