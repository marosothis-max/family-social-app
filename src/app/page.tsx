import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="hero-title">FamilyHub</h1>
        <p className="subtitle">Conecta. Comparte. Crece juntos.</p>
        <div className="cta-buttons">
          <Link href="/register">
            <button className="btn-primary">Comenzar</button>
          </Link>
          <Link href="/login">
            <button className="btn-secondary">Iniciar Sesión</button>
          </Link>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll para explorar</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2>Características para tu familia</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Muro Social Familiar</h3>
              <p>Comparte momentos especiales solo con tu familia</p>
            </div>

            <div className="feature-card">
              <div className="icon">📸</div>
              <h3>Álbumes Compartidos</h3>
              <p>Crea álbumes de fotos y videos familiares</p>
            </div>

            <div className="feature-card">
              <div className="icon">📅</div>
              <h3>Calendario Familiar</h3>
              <p>Organiza eventos y cumpleaños juntos</p>
            </div>

            <div className="feature-card">
              <div className="icon">✅</div>
              <h3>Gestión de Tareas</h3>
              <p>Asigna y completa tareas del hogar</p>
            </div>

            <div className="feature-card">
              <div className="icon">📚</div>
              <h3>Seguimiento Educativo</h3>
              <p>Monitorea el progreso escolar de tus hijos</p>
            </div>

            <div className="feature-card">
              <div className="icon">🎁</div>
              <h3>Lista de Deseos</h3>
              <p>Crea listas de regalos para cumpleaños</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="specs-section">
        <div className="container">
          <h2>Funcionalidades completas</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Privacidad</span>
              <span className="spec-value">100% Privado</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Almacenamiento</span>
              <span className="spec-value">Ilimitado</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Miembros</span>
              <span className="spec-value">Sin límite</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Dispositivos</span>
              <span className="spec-value">Multi-plataforma</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Seguridad</span>
              <span className="spec-value">Encriptado</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Soporte</span>
              <span className="spec-value">24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <p>© 2026 FamilyHub. Tu espacio familiar privado.</p>
      </footer>
    </>
  )
}
