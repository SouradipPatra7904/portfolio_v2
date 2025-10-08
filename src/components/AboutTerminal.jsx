import { useEffect, useState } from "react";
import "../styles/AboutTerminal.css";

export default function AboutTerminal() {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);
  const [isTypingOutput, setIsTypingOutput] = useState(false);

  const commands = [
    {
      command: 'echo "Who is Souradip Patra?"',
      output:
        '>>> Hi! I’m Souradip Patra — a Java & Spring Boot Developer passionate about scalable backends, event-driven systems, and distributed architectures.',
    },
    {
      command: "ls skills --Souradip-Patra",
      output:
        ">>> Java  •  Spring Boot  •  Kafka  •  PostgreSQL  •  Redis  •  Microservices  •  CQRS  •  Observability",
    },
    {
      command: "cat interests.txt",
      output: ">>> Chess ♟️  |  Guitar 🎸  |  Coding 💻  |  Hiking 🏔️  |  Cooking 🍳",
    },
    {
      command: "date",
      output: new Date().toLocaleString(),
    },
    {
      command: "echo 'Thanks for visiting!'",
      output: "🚀 Stay curious. Keep building.",
    },
  ];

  // Tiny typing sound
  const playClick = () => {
    const audio = new Audio(
      "https://cdn.pixabay.com/audio/2022/03/15/audio_5d183d93e4.mp3"
    );
    audio.volume = 0.07;
    audio.play().catch(() => {});
  };

  const handleReplay = () => {
    setIsReplaying(true);
    setTimeout(() => {
      setLines([]);
      setCurrentText("");
      setCmdIndex(0);
      setIsReplaying(false);
    }, 1000);
  };

  useEffect(() => {
    let loopTimer;

    if (cmdIndex < commands.length) {
      const { command, output } = commands[cmdIndex];
      let i = 0;
      let j = 0;

      // Typing command first
      const typer = setInterval(() => {
        setIsTypingOutput(false);
        setCurrentText(command.slice(0, i + 1));
        playClick();
        i++;

        if (i === command.length) {
          clearInterval(typer);
          setLines((prev) => [...prev, { type: "command", text: `$ ${command}` }]);
          setCurrentText("");

          // Start typing output
          setIsTypingOutput(true);
          const outputTyper = setInterval(() => {
            setCurrentText(output.slice(0, j + 1));
            playClick();
            j++;

            if (j === output.length) {
              clearInterval(outputTyper);
              setLines((prev) => [...prev, { type: "output", text: output }]);
              setCurrentText("");
              setCmdIndex((prev) => prev + 1);
              setIsTypingOutput(false);
            }
          }, 25);
        }
      }, 40);

      return () => clearInterval(typer);
    } else {
      // Restart loop after 75 seconds
      loopTimer = setTimeout(() => {
        handleReplay();
      }, 75000);
    }

    return () => clearTimeout(loopTimer);
  }, [cmdIndex]);

  return (
    <section id="about" className="terminal-section">
      <div className={`terminal-window ${isReplaying ? "fade-out" : "fade-in"}`}>
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">about_me.sh</span>
          <button className="replay-btn" onClick={handleReplay}>
            ↻ Replay
          </button>
        </div>

        <div className="terminal-body">
          {lines.map((line, idx) => (
            <div key={idx} className={`line ${line.type}`}>
              {line.text}
            </div>
          ))}

          {currentText && (
            <div className={`line ${isTypingOutput ? "output" : "command"}`}>
              {isTypingOutput ? currentText : `$ ${currentText}`}
              <span className="cursor">|</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
