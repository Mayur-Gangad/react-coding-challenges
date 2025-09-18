
# Stopwatch App - React + useRef

A simple **Stopwatch App** built with React using the **useRef hook** to demonstrate pause, resume, start, and reset functionalities efficiently.

## Features
- ⏱ Start, Stop, Resume, and Reset Timer  
- ⚡ Optimized with **useRef** to avoid unnecessary re-renders  
- 🧠 Clean code for **interview practice** and **learning purposes**  
- 📱 Responsive and minimal UI  

## Tech Stack
- **React (Hooks)** → For UI and logic  
- **useRef** → To store interval ID without re-renders  
- **useState** → To track timer value and pause/resume state  

## How to Run the Project
```bash
# Clone the repository
git clone https://github.com/Mayur-Gangad/react-coding-challenges.git

# Navigate to project directory
cd stopwatch-app

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure
```
stopwatch-app/
│-- src/
│   │-- App.js         # Main React Component
│   │-- App.css        # Styles
│-- public/
│   │-- index.html
│-- package.json
│-- README.md
```

## Core Logic Explanation
```jsx
const timeRef = useRef(null); // Stores interval ID without causing re-render
const [time, setTime] = useState(0); // Holds timer value
const [isPaused, setIsPaused] = useState(true); // Controls start/stop state
```

- **useRef** → Stores setInterval ID so we can start, stop, and resume without re-renders  
- **useState** → Updates UI when time changes  

## Screenshots / Demo

```md
![Stopwatch Demo](assets/stopWatch.png)
```

## Learning Points
- Difference between **useRef vs useState**  
- How to **optimize performance** in React  
- Real-life use cases for **useRef** (Timers, DOM access, WebSocket, etc.)  

## Future Enhancements
- ⏳ Add Lap functionality  
- 🎨 Add better UI with animations  
- ⏰ Add countdown timer feature  

## Author
Created by **Mayur Gangad** ✨
