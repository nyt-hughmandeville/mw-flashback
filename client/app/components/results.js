import styles from "./results.module.css";

// Guessing - Render current event to guess.
export default function Results({events, index, setEvents, setIndex}) {
  if (index < events.length - 1) {
    return null;
  }

  let score = 0;
  let possiblePoints = 0;
  let numCorrect = 0;
  const numEvents = events.length - 1;

  for (let i = 1; i < events.length; i++) {
    const event = events[i];
    if (event.status === "correct") {
      numCorrect++;
    }
    score += event.actualPoints;
    possiblePoints += event.possiblePoints;
  }

  return (
    <div className={styles.results}>
      Great! You scored {score} of {possiblePoints} points, with {numCorrect} of {numEvents} events
      correct.
      <div
        className={styles.button}
        onClick={(e) => {
          setEvents(
            events.map((event) => {
              return {
                ...event,
                status: event.status === "start" ? "start" : "unanswered",
                actualPoints: 0,
                guess: "",
              };
            })
          );
          setIndex(0);
        }}
      >
        Start over
      </div>
    </div>
  );
}
