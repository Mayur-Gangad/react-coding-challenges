import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0); // State to track time and update the UI on change

  const [isPaused, setIsPaused] = useState(true); // State to manage Pause/Resume button logic

  const timeRef = useRef(null); // useRef to store the interval ID without causing re-renders

  // Utility function to start or restart the interval
  const startInterval = () => {
    clearInterval(timeRef.current); // Clear any previous interval before starting a new one
    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Increment time every second
    }, 1000);
  };

  // Start button handler
  const handleStart = () => {
    clearInterval(timeRef.current); // Ensure no duplicate intervals are running
    setIsPaused(false); // Mark the timer as running
    startInterval(); // Start the timer
  };

  // Pause/Resume button handler
  const handlePauseReseme = () => {
    if (isPaused) {
      // Resume logic: if paused, start the interval again
      setIsPaused(false);
      startInterval();
    } else {
      // Pause logic: if running, stop the interval
      setIsPaused(true);
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  // Reset button handler
  const handleReset = () => {
    clearInterval(timeRef.current); // Stop any running interval
    timeRef.current = null; // Clear stored interval ID
    setTime(0); // Reset time back to 0
    setIsPaused(true); // Mark timer as paused
  };

  return (
    <>
      <h2>Stop Watch</h2>
      <h2>{time} seconds</h2>
      <div className="btns" style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePauseReseme}>
          {isPaused ? "Resume" : "Stop"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default App;
