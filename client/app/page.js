"use client";

import data from "../data/nyt-2024-03-01.json";
import Guessing from "./components/guessing";
import ProgressBar from "./components/progress-bar";
import Timeline from "./components/timeline";
import styles from "./page.module.css";
import {useState} from "react";
import {compareYear} from "./utils/utils";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState(data);

  const madeGuess = (dropIndex) => {
    const displayEvents = events.slice(0, index + 1).sort(compareYear);
    const droppedEvent = displayEvents[index];

    let correct = true;
    if (dropIndex <= displayEvents.length) {
      // Check if before the event that is after
      const afterEvent = displayEvents[dropIndex];
      if (droppedEvent.year > afterEvent.year) {
        correct = false;
      }
    }
    if (dropIndex > 0) {
      // Check if after the event that is before
      const beforeEvent = displayEvents[dropIndex - 1];
      if (droppedEvent.year < beforeEvent.year) {
        correct = false;
      }
    }

    events[index + 1].status = correct ? "correct" : "incorrect";
    setEvents(events);

    setIndex(index + 1);
  };

  return (
    <main className={styles.main}>
      <ProgressBar events={events} index={index} />
      <Guessing events={events} index={index} />
      <Timeline events={events} index={index} madeGuess={madeGuess} />
      <div className={styles.index}>{index}</div>
    </main>
  );
}
