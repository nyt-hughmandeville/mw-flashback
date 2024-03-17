"use client";

import data from "../data/nyt-2024-03-01.json";
import ProgressBar from "./components/progress-bar";
import Timeline from "./components/timeline";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
  const [index, setIndex] = useState(9);
  const [events, setEvents] = useState(data);

  return (
    <main className={styles.main}>
      <ProgressBar events={events} index={index} />
      <hr />
      <Timeline events={events} index={index} />
    </main>
  );
}
