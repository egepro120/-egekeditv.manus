import { useState } from "react";

const ADMIN_CREDENTIALS = {
  emails: ["fatmatopuz1989@gmail.com", "egetopuz592@gmail.com"],
  password: "2014",
};

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ADMIN_CREDENTIALS.emails.includes(adminEmail.trim().toLowerCase())) {
      setAdminError("Bu e-posta adresi yetkili değil!");
      return;
    }
    if (adminPassword !== ADMIN_CREDENTIALS.password) {
      setAdminError("Şifre yanlış!");
      return;
    }
    setAdminLoggedIn(true);
    setAdminError("");
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0a0a0f", color: "#fff", minHeight: "100vh" }}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(10,10,15,0.9)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid #2a2a4a"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <a href="#anasayfa" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="/manus-storage/egekeditv-logo_b95e124b.png" alt="egekeditv logo" style={{ width: 40, height: 40, borderRadius: 8 }} />
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "1.2rem", background: "linear-gradient(135deg, #39ff14, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>egekeditv</span>
          </a>
          
          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenu(!mobileMenu)} style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }} className="mobile-toggle">☰</button>
          
          <ul style={{ display: "flex", listStyle: "none", gap: 8, margin: 0, padding: 0 }}>
            <li><a href="#anasayfa" style={{ color: "#39ff14", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: "0.9rem", background: "rgba(57,255,20,0.08)" }}>Ana Sayfa</a></li>
            <li><a href="#oyunlarim" style={{ color: "#b0b0b0", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: "0.9rem" }}>Oyunlarım</a></li>
            <li><a href="#urunler" style={{ color: "#b0b0b0", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: "0.9rem" }}>Ürünler</a></li>
            <li><a href="#iletisim" style={{ color: "#b0b0b0", padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: "0.9rem" }}>İletişim</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/manus-storage/egekeditv-hero_8d4330a4.png" alt="egekeditv YouTube kanalı hero görseli" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.4) 50%, rgba(10,10,15,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "120px 20px 80px" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.3)", borderRadius: 50, fontSize: "0.85rem", color: "#39ff14", marginBottom: 24 }}>🎮 YouTube Oyun Kanalı</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 900, marginBottom: 16, background: "linear-gradient(135deg, #39ff14, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>egekeditv</h1>
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#fff", marginBottom: 12 }}>Oyun Dünyama Hoş Geldin!</p>
          <p style={{ fontSize: "1rem", color: "#b0b0b0", maxWidth: 500, margin: "0 auto 32px" }}>Roblox, oyun editleri ve daha fazlası. Eğlenceye hazır mısın?</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="https://www.youtube.com/@pkxdegekeditv" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", background: "#39ff14", color: "#0a0a0f", boxShadow: "0 0 20px rgba(57,255,20,0.3)" }}>▶ Kanala Git</a>
            <a href="#oyunlarim" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", background: "transparent", color: "#fff", border: "1px solid #2a2a4a" }}>Oyunlarımı Keşfet</a>
          </div>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "'Orbitron', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#39ff14" }}>90+</span>
              <span style={{ fontSize: "0.85rem", color: "#6a6a8a" }}>Abone</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "'Orbitron', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#39ff14" }}>50+</span>
              <span style={{ fontSize: "0.85rem", color: "#6a6a8a" }}>Video</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "'Orbitron', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "#39ff14" }}>1K+</span>
              <span style={{ fontSize: "0.85rem", color: "#6a6a8a" }}>İzlenme</span>
            </div>
          </div>
        </div>
      </section>

      {/* Oyunlarım Section */}
      <section id="oyunlarim" style={{ position: "relative", padding: "100px 0", background: "#1a1a2e" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <img src="/manus-storage/egekeditv-games-bg_b89db6ee.png" alt="Oyunlar bölümü arka plan görseli" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>Oyunlarım</h2>
          <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "1rem", marginBottom: 48 }}>Geliştirdiğim ve üzerinde çalıştığım oyunlar</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {/* Futbol Bilgim */}
            <div style={{ background: "#12121f", borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a4a", position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 12px", background: "#39ff14", color: "#0a0a0f", fontSize: "0.75rem", fontWeight: 700, borderRadius: 20, zIndex: 2 }}>Yeni!</div>
              <div style={{ width: "100%", height: 280, overflow: "hidden" }}>
                <img src="/manus-storage/futbol-bilgim_edd7c0d8.jpg" alt="Futbol Bilgim - Futbol bilgisi quiz oyunu" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.2rem", marginBottom: 8 }}>Futbol Bilgim</h3>
                <p style={{ fontSize: "0.9rem", color: "#b0b0b0", marginBottom: 16, lineHeight: 1.5 }}>Futbol bilgini test et, quizlere katıl, sıralamada yüksel! Günlük meydan okumalar ve ödüller seni bekliyor.</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ padding: "4px 12px", background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.2)", borderRadius: 20, fontSize: "0.75rem", color: "#39ff14" }}>Quiz</span>
                  <span style={{ padding: "4px 12px", background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.2)", borderRadius: 20, fontSize: "0.75rem", color: "#39ff14" }}>Futbol</span>
                  <span style={{ padding: "4px 12px", background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.2)", borderRadius: 20, fontSize: "0.75rem", color: "#39ff14" }}>Bilgi Yarışması</span>
                </div>
              </div>
            </div>

            {/* Çok Yakında */}
            <div style={{ background: "#12121f", borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a4a", position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 12px", background: "#bf00ff", color: "#fff", fontSize: "0.75rem", fontWeight: 700, borderRadius: 20, zIndex: 2 }}>Çok Yakında</div>
              <div style={{ width: "100%", height: 280, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #1a1a2e, #0a0a0f)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem" }}>🎮</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "3rem", color: "#6a6a8a" }}>?</div>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.2rem", marginBottom: 8 }}>Yeni Oyun Geliyor...</h3>
                <p style={{ fontSize: "0.9rem", color: "#b0b0b0", lineHeight: 1.5 }}>Yeni bir oyun üzerinde çalışıyorum. Takipte kal!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Section */}
      <section id="urunler" style={{ padding: "100px 0", background: "#0a0a0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>Ürünler</h2>
          <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "1rem", marginBottom: 48 }}>Kendi tasarladığım özel ürünler</p>
          
          <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center", padding: "60px 40px", background: "#12121f", borderRadius: 20, border: "1px dashed #2a2a4a" }}>
            <div style={{ fontSize: "4rem", marginBottom: 20 }}>🛍️</div>
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.5rem", color: "#bf00ff", marginBottom: 12 }}>Çok Yakında!</h3>
            <p style={{ color: "#b0b0b0", fontSize: "0.95rem", marginBottom: 24 }}>Özel tasarım ürünlerim çok yakında burada olacak. Takipte kal!</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <span style={{ width: 10, height: 10, background: "#bf00ff", borderRadius: "50%", animation: "pulse 1.5s infinite" }}></span>
              <span style={{ width: 10, height: 10, background: "#bf00ff", borderRadius: "50%", animation: "pulse 1.5s infinite 0.3s" }}></span>
              <span style={{ width: 10, height: 10, background: "#bf00ff", borderRadius: "50%", animation: "pulse 1.5s infinite 0.6s" }}></span>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Section */}
      <section id="iletisim" style={{ padding: "100px 0", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>İletişim</h2>
          <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "1rem", marginBottom: 48 }}>Benimle iletişime geç</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            <a href="https://www.youtube.com/@pkxdegekeditv" target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 24px", background: "#12121f", borderRadius: 16, border: "1px solid #2a2a4a", textDecoration: "none", color: "#fff" }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, background: "rgba(255,0,0,0.15)", fontSize: "1.5rem" }}>▶</div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>YouTube</h3>
              <p style={{ fontSize: "0.85rem", color: "#b0b0b0" }}>@pkxdegekeditv</p>
            </a>

            <a href="https://www.instagram.com/blolerox1545" target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 24px", background: "#12121f", borderRadius: 16, border: "1px solid #2a2a4a", textDecoration: "none", color: "#fff" }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, background: "rgba(225,48,108,0.15)", fontSize: "1.5rem" }}>📷</div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>Instagram</h3>
              <p style={{ fontSize: "0.85rem", color: "#b0b0b0" }}>@blolerox1545</p>
            </a>

            <a href="mailto:iletisim2014egekeditv@gmail.com" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 24px", background: "#12121f", borderRadius: 16, border: "1px solid #2a2a4a", textDecoration: "none", color: "#fff" }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, background: "rgba(57,255,20,0.15)", fontSize: "1.5rem" }}>✉️</div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>E-posta</h3>
              <p style={{ fontSize: "0.85rem", color: "#b0b0b0" }}>iletisim2014egekeditv@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "30px 0", background: "#0a0a0f", borderTop: "1px solid #2a2a4a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
            <img src="/manus-storage/egekeditv-logo_b95e124b.png" alt="egekeditv footer logo" style={{ width: 30, height: 30, borderRadius: 6 }} />
            <span>egekeditv</span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#6a6a8a" }}>© 2024 egekeditv. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* Admin Trigger - Gizli Buton */}
      <div onClick={() => setShowAdmin(true)} style={{ position: "fixed", bottom: 20, right: 20, width: 12, height: 12, borderRadius: "50%", background: "rgba(57,255,20,0.2)", cursor: "pointer", zIndex: 999 }} title="Admin" />

      {/* Admin Panel Overlay */}
      {showAdmin && (
        <div onClick={(e) => { if (e.target === e.currentTarget) { setShowAdmin(false); setAdminLoggedIn(false); } }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {!adminLoggedIn ? (
            <div style={{ background: "#12121f", border: "1px solid #2a2a4a", borderRadius: 20, padding: 40, width: "90%", maxWidth: 400, position: "relative" }}>
              <button onClick={() => setShowAdmin(false)} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "#b0b0b0", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
              <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.3rem", marginBottom: 24, color: "#39ff14" }}>Admin Girişi</h2>
              <form onSubmit={handleAdminLogin}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#b0b0b0", marginBottom: 6 }}>E-posta</label>
                  <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="E-posta adresiniz" required style={{ width: "100%", padding: "12px 16px", background: "#0a0a0f", border: "1px solid #2a2a4a", borderRadius: 10, color: "#fff", fontSize: "0.95rem" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#b0b0b0", marginBottom: 6 }}>Şifre</label>
                  <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Şifre" required style={{ width: "100%", padding: "12px 16px", background: "#0a0a0f", border: "1px solid #2a2a4a", borderRadius: 10, color: "#fff", fontSize: "0.95rem" }} />
                </div>
                {adminError && <p style={{ color: "#ff4444", fontSize: "0.85rem", marginBottom: 12 }}>{adminError}</p>}
                <button type="submit" style={{ width: "100%", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: "0.95rem", background: "#39ff14", color: "#0a0a0f", border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(57,255,20,0.3)" }}>Giriş Yap</button>
              </form>
            </div>
          ) : (
            <div style={{ background: "#12121f", border: "1px solid #2a2a4a", borderRadius: 20, width: "90%", maxWidth: 600, maxHeight: "80vh", overflowY: "auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 30px", borderBottom: "1px solid #2a2a4a" }}>
                <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.2rem", color: "#39ff14" }}>Admin Paneli</h2>
                <button onClick={() => { setShowAdmin(false); setAdminLoggedIn(false); }} style={{ background: "none", border: "none", color: "#b0b0b0", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
              </div>
              <div style={{ padding: "24px 30px" }}>
                <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #2a2a4a" }}>
                  <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>📊 Site Yönetimi</h3>
                  <p style={{ fontSize: "0.9rem", color: "#b0b0b0" }}>Hoş geldin! Buradan siteni yönetebilirsin.</p>
                </div>
                <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #2a2a4a" }}>
                  <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>🎮 Oyunlar</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "0.9rem", color: "#b0b0b0" }}>
                    <span>Futbol Bilgim</span>
                    <span style={{ padding: "3px 10px", borderRadius: 12, fontSize: "0.75rem", fontWeight: 600, background: "rgba(57,255,20,0.15)", color: "#39ff14" }}>Aktif</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "0.9rem", color: "#b0b0b0" }}>
                    <span>Yeni Oyun</span>
                    <span style={{ padding: "3px 10px", borderRadius: 12, fontSize: "0.75rem", fontWeight: 600, background: "rgba(191,0,255,0.15)", color: "#bf00ff" }}>Çok Yakında</span>
                  </div>
                </div>
                <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #2a2a4a" }}>
                  <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>🛍️ Ürünler</h3>
                  <p style={{ fontSize: "0.9rem", color: "#6a6a8a", fontStyle: "italic" }}>Ürünler henüz eklenmedi. Çok yakında!</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>📧 İletişim Bilgileri</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "0.9rem", color: "#b0b0b0" }}>
                    <span>E-posta:</span>
                    <span>iletisim2014egekeditv@gmail.com</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "0.9rem", color: "#b0b0b0" }}>
                    <span>Instagram:</span>
                    <span>@blolerox1545</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "0.9rem", color: "#b0b0b0" }}>
                    <span>YouTube:</span>
                    <span>@pkxdegekeditv</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @media (max-width: 768px) {
          nav ul { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
}
