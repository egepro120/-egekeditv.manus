import { useState } from "react";

interface GameScore {
  id: string;
  score: number;
}

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [scores, setScores] = useState<GameScore[]>([]);

  // Futbol Quiz Oyunu
  const FootballQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const questions = [
      {
        question: "Dünya Kupası kaç yılda bir yapılır?",
        options: ["2 yıl", "4 yıl", "3 yıl", "5 yıl"],
        correct: 1,
      },
      {
        question: "Futbolda bir takımda kaç oyuncu bulunur?",
        options: ["9", "10", "11", "12"],
        correct: 2,
      },
      {
        question: "Penaltı atışı hangi mesafeden yapılır?",
        options: ["10m", "11m", "12m", "13m"],
        correct: 1,
      },
      {
        question: "Futbol sahasının uzunluğu kaç metredir?",
        options: ["90m", "100m", "110m", "120m"],
        correct: 2,
      },
      {
        question: "Kırmızı kart ne anlama gelir?",
        options: ["Uyarı", "Oyundan çıkarılma", "Penaltı", "Gol"],
        correct: 1,
      },
    ];

    const handleAnswer = (index: number) => {
      if (index === questions[currentQuestion].correct) {
        setScore(score + 10);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameOver(true);
      }
    };

    const restartGame = () => {
      setCurrentQuestion(0);
      setScore(0);
      setGameOver(false);
    };

    return (
      <div style={{ padding: "40px 20px" }}>
        {!gameOver ? (
          <div>
            <div
              style={{
                marginBottom: 24,
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "#6a6a8a", marginBottom: 8 }}>
                Soru {currentQuestion + 1}/{questions.length}
              </p>
              <div
                style={{
                  width: "100%",
                  height: 8,
                  background: "rgba(57,255,20,0.1)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    height: "100%",
                    background: "#39ff14",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: 24,
                textAlign: "center",
              }}
            >
              {questions[currentQuestion].question}
            </h3>

            <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  style={{
                    padding: "16px 20px",
                    background: "rgba(57,255,20,0.1)",
                    border: "1px solid rgba(57,255,20,0.3)",
                    borderRadius: 12,
                    color: "#39ff14",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.2)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            <p style={{ textAlign: "center", color: "#6a6a8a" }}>
              Puan: <span style={{ color: "#39ff14", fontWeight: 700 }}>{score}</span>
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: "3rem", marginBottom: 20 }}>🏆</div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: 12 }}>Oyun Bitti!</h2>
            <p style={{ fontSize: "1.2rem", color: "#39ff14", marginBottom: 24 }}>
              Toplam Puan: {score}
            </p>
            <button
              onClick={restartGame}
              style={{
                padding: "12px 24px",
                background: "#39ff14",
                color: "#0a0a0f",
                border: "none",
                borderRadius: 10,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Tekrar Oyna
            </button>
          </div>
        )}
      </div>
    );
  };

  // Clicker Oyunu
  const ClickerGame = () => {
    const [clickScore, setClickScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
      setGameStarted(true);
      setClickScore(0);
      setTimeLeft(30);

      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setGameStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        {!gameStarted && timeLeft === 30 ? (
          <div>
            <div style={{ fontSize: "4rem", marginBottom: 20 }}>🎮</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Tıklama Oyunu</h3>
            <p style={{ color: "#b0b0b0", marginBottom: 24 }}>
              30 saniyede mümkün olduğunca çok tıkla!
            </p>
            <button
              onClick={startGame}
              style={{
                padding: "14px 28px",
                background: "#39ff14",
                color: "#0a0a0f",
                border: "none",
                borderRadius: 10,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Başla
            </button>
          </div>
        ) : gameStarted ? (
          <div>
            <p style={{ fontSize: "0.9rem", color: "#6a6a8a", marginBottom: 20 }}>
              Kalan Süre: <span style={{ color: "#39ff14", fontWeight: 700 }}>{timeLeft}s</span>
            </p>
            <button
              onClick={() => setClickScore(clickScore + 1)}
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #39ff14, #00d4ff)",
                border: "none",
                color: "#0a0a0f",
                fontSize: "2rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "transform 0.1s ease",
                margin: "0 auto 20px",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              TIK
            </button>
            <p style={{ fontSize: "1.5rem", color: "#39ff14", fontWeight: 700 }}>
              {clickScore}
            </p>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: "3rem", marginBottom: 20 }}>🏆</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Oyun Bitti!</h3>
            <p style={{ fontSize: "1.2rem", color: "#39ff14", marginBottom: 24 }}>
              Tıklama Sayısı: {clickScore}
            </p>
            <button
              onClick={() => {
                setClickScore(0);
                setTimeLeft(30);
                startGame();
              }}
              style={{
                padding: "12px 24px",
                background: "#39ff14",
                color: "#0a0a0f",
                border: "none",
                borderRadius: 10,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Tekrar Oyna
            </button>
          </div>
        )}
      </div>
    );
  };

  const games = [
    {
      id: "football-quiz",
      name: "Futbol Bilgisi Quiz",
      emoji: "⚽",
      description: "Futbol bilgini test et!",
      component: FootballQuiz,
    },
    {
      id: "clicker",
      name: "Tıklama Oyunu",
      emoji: "🎮",
      description: "30 saniyede tıkla!",
      component: ClickerGame,
    },
  ];

  const selectedGameData = games.find((g) => g.id === selectedGame);
  const GameComponent = selectedGameData?.component;

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0a0a0f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "rgba(10,10,15,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #2a2a4a",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #39ff14, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🎮 Minik Oyunlar
        </h1>
        <a
          href="/"
          style={{
            padding: "8px 16px",
            background: "rgba(57,255,20,0.1)",
            border: "1px solid rgba(57,255,20,0.3)",
            borderRadius: 8,
            color: "#39ff14",
            textDecoration: "none",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          ← Ana Sayfa
        </a>
      </header>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        {!selectedGame ? (
          <div>
            <h2
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "2rem",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Oyun Seç
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#b0b0b0",
                marginBottom: 40,
              }}
            >
              Tüm oyunlar bedava! Eğlenceye hazır mısın?
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {games.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  style={{
                    background: "#12121f",
                    borderRadius: 16,
                    border: "1px solid #2a2a4a",
                    padding: 24,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#39ff14";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a4a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>{game.emoji}</div>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>{game.name}</h3>
                  <p style={{ color: "#b0b0b0", marginBottom: 16 }}>{game.description}</p>
                  <button
                    style={{
                      padding: "10px 20px",
                      background: "#39ff14",
                      color: "#0a0a0f",
                      border: "none",
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Oyna
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedGame(null)}
              style={{
                padding: "10px 20px",
                background: "rgba(57,255,20,0.1)",
                border: "1px solid rgba(57,255,20,0.3)",
                borderRadius: 8,
                color: "#39ff14",
                cursor: "pointer",
                marginBottom: 24,
                fontWeight: 600,
              }}
            >
              ← Geri Dön
            </button>
            <div
              style={{
                background: "#12121f",
                borderRadius: 16,
                border: "1px solid #2a2a4a",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px", borderBottom: "1px solid #2a2a4a" }}>
                <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
                  {selectedGameData?.emoji} {selectedGameData?.name}
                </h2>
              </div>
              {GameComponent && <GameComponent />}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
