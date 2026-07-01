import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Egbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Merhaba! 👋 Ben egbot. Sana nasıl yardımcı olabilirim? Oyunlar, iletişim veya başka bir konuda sorularının varsa bana sor!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getSimpleResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();

    if (
      lowerMessage.includes("futbol") ||
      lowerMessage.includes("oyun") ||
      lowerMessage.includes("game")
    ) {
      return "🎮 Futbol Bilgim oyunumuz çok yakında çıkacak! Futbol bilgini test edebilecek, quizlere katılabilecek ve sıralamada yükseleceksin. Merak ediyorsan YouTube kanalımı takip et!";
    }

    if (
      lowerMessage.includes("iletişim") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("e-posta")
    ) {
      return "📧 Bana ulaşabilirsin:\n- Email: iletisim2014egekeditv@gmail.com\n- Instagram: @blolerox1545\n- YouTube: @pkxdegekeditv";
    }

    if (
      lowerMessage.includes("merhaba") ||
      lowerMessage.includes("selam") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello")
    ) {
      return "Merhaba! 👋 Ben egbot. Sana nasıl yardımcı olabilirim?";
    }

    if (
      lowerMessage.includes("kanal") ||
      lowerMessage.includes("youtube") ||
      lowerMessage.includes("creator")
    ) {
      return "📺 egekeditv YouTube kanalına hoş geldin! Roblox, oyun editleri ve daha fazlası burada. Kanalı ziyaret etmek için: https://www.youtube.com/@pkxdegekeditv";
    }

    if (
      lowerMessage.includes("teşekkür") ||
      lowerMessage.includes("thanks") ||
      lowerMessage.includes("sağol")
    ) {
      return "Bana yardımcı olabildiğim için mutluyum! 😊 Başka sorun varsa bana sor!";
    }

    return "İlginç bir soru! 🤔 Daha fazla bilgi için YouTube kanalımı ziyaret edebilir veya bana email gönderebilirsin. Başka bir şey soruyor musun?";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = getSimpleResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0a0a0f",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "linear-gradient(135deg, #39ff14, #00d4ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 700,
            }}
          >
            🤖
          </div>
          <div>
            <h1
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                margin: 0,
                background: "linear-gradient(135deg, #39ff14, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              egbot
            </h1>
            <p style={{ fontSize: "0.75rem", color: "#6a6a8a", margin: 0 }}>
              egekeditv Asistanı
            </p>
          </div>
        </div>
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

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              gap: 12,
            }}
          >
            {msg.sender === "bot" && (
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #39ff14, #00d4ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
            )}
            <div
              style={{
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: 12,
                background:
                  msg.sender === "user"
                    ? "rgba(57,255,20,0.15)"
                    : "rgba(0,212,255,0.1)",
                border:
                  msg.sender === "user"
                    ? "1px solid rgba(57,255,20,0.3)"
                    : "1px solid rgba(0,212,255,0.3)",
                color: msg.sender === "user" ? "#39ff14" : "#00d4ff",
                fontSize: "0.95rem",
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #39ff14, #00d4ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              🤖
            </div>
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              <div style={{ display: "flex", gap: 4 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00d4ff",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00d4ff",
                    animation: "pulse 1.5s infinite 0.3s",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00d4ff",
                    animation: "pulse 1.5s infinite 0.6s",
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div
        style={{
          borderTop: "1px solid #2a2a4a",
          padding: "16px 20px",
          background: "rgba(10,10,15,0.9)",
          backdropFilter: "blur(20px)",
        }}
      >
        <form
          onSubmit={handleSendMessage}
          style={{
            display: "flex",
            gap: 12,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Mesajını yaz..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: "12px 16px",
              background: "#12121f",
              border: "1px solid #2a2a4a",
              borderRadius: 10,
              color: "#fff",
              fontSize: "0.95rem",
              outline: "none",
              opacity: isLoading ? 0.5 : 1,
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            style={{
              padding: "12px 24px",
              background: "#39ff14",
              color: "#0a0a0f",
              border: "none",
              borderRadius: 10,
              fontWeight: 600,
              cursor: isLoading || !inputValue.trim() ? "not-allowed" : "pointer",
              opacity: isLoading || !inputValue.trim() ? 0.5 : 1,
              fontSize: "0.95rem",
            }}
          >
            Gönder
          </button>
        </form>
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
