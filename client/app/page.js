"use client";

import GameSelect from "./components/game-select";
import Guessing from "./components/guessing";
import ProgressBar from "./components/progress-bar";
import Timeline from "./components/timeline";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {compareYear} from "./utils/utils";
import Results from "./components/results";

export default function Home() {
  const games = [
    {label: "Flashback: March 2, 2024", value: "nyt-2024-03-02.json"},
    {label: "Flashback: March 9, 2024", value: "nyt-2024-03-09.json"},
  ];

  const [dragOverZone, setDragOverZone] = useState(-1); // -1 is no zone
  const [events, setEvents] = useState([]);
  const [game, setGame] = useState(games[0]);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("TBD: Load game");

  useEffect(() => {
    console.log("Loading game...");
    const path = "/games/" + game.value;
    setMessage("Loading game (" + path + ")...");
    fetch(path, {
      cache: "no-cache",
      method: "GET",
      mode: "cors",
    }).then((response) => {
      if (!response.ok) {
        setMessage("Problem loading game (" + response.status + "): " + response.statusText);
        return;
      }
      response.json().then((data) => {
        setMessage("Loaded");
        setEvents(data);
      });
    });
  }, [game]);

  const madeGuess = (dropIndex) => {
    const displayEvents = events.slice(0, index + 1).sort(compareYear);
    const droppedEvent = events[index + 1];

    let correct = true;
    let guess = "";

    if (dropIndex > 0) {
      // Check if after the event that is before
      const beforeEvent = displayEvents[dropIndex - 1];
      if (droppedEvent.year < beforeEvent.year) {
        correct = false;
      }
      guess += beforeEvent.year;
    }
    guess += "-";
    if (dropIndex <= displayEvents.length) {
      // Check if before the event that is after
      const afterEvent = displayEvents[dropIndex];
      if (droppedEvent.year > afterEvent.year) {
        correct = false;
      }
      guess += afterEvent.year;
    }

    if (correct) {
      events[index + 1].status = "correct";
      events[index + 1].actualPoints = events[index + 1].possiblePoints;
    } else {
      events[index + 1].status = "incorrect";
      // TBD: could add partial points
    }
    events[index + 1].guess = guess;
    setEvents(events);

    setIndex(index + 1);
  };

  return (
    <main className={styles.main}>
      <GameSelect game={game} games={games} setGame={setGame} />
      <div className={styles.top_bar}>
        <ProgressBar events={events} index={index} />
        <Guessing events={events} index={index} />
        <Results events={events} index={index} setEvents={setEvents} setIndex={setIndex} />
      </div>
      <div className={styles.bottom}>
        <Timeline
          dragOverZone={dragOverZone}
          events={events}
          index={index}
          madeGuess={madeGuess}
          setDragOverZone={setDragOverZone}
        />
      </div>
    </main>
  );
}
