import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Braces, Layers3, Flame } from 'lucide-react'; 
import './styles/main.scss';

// --- COMPONENTE DA LOGA ANIMADA (LORENZO) ---
const LogoAnimada = () => {
  const nome = "LORENZO".split("");
  const fonts = [
    "'Monoton', cursive",
    "'Bungee Shade', cursive",
    "'Special Elite', system-ui",
    "'Pacifico', cursive",
    "'Syncopate', sans-serif",
    "'Creepster', system-ui"
  ];

  const [fontStyles, setFontStyles] = useState(nome.map(() => "'Quicksand', sans-serif"));

  useEffect(() => {
    nome.forEach((_, index) => {
      // Tempo aleatório entre 1 e 30 segundos para a troca
      const tempoAleatorio = Math.random() * 29000 + 1000;

      const trocarFonte = () => {
        setFontStyles(prev => {
          const novoEstilo = [...prev];
          const fonteAleatoria = fonts[Math.floor(Math.random() * fonts.length)];
          novoEstilo[index] = fonteAleatoria;
          return novoEstilo;
        });
      };

      const interval = setInterval(trocarFonte, tempoAleatorio);
      return () => clearInterval(interval);
    });
  }, []);

  return (
    <Link to="/" className="logo-container">
      {nome.map((letra, i) => (
        <span key={i} style={{ fontFamily: fontStyles[i] }} className="letra-animada">
          {letra}
        </span>
      ))}
    </Link>
  );
};

// --- COMPONENTES DE PÁGINA ---

const Home = () => (
  <motion.div 
    className="page-container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="hero-title">Desenvolvedor<br/>Front-end</h1>
    <div className="skills-grid">
      {[
        { name: 'HTML', icon: Code2 },
        { name: 'SCSS', icon: Layers3 },
        { name: 'JavaScript', icon: Braces },
        { name: 'React', icon: Flame },
      ].map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div key={index} className="skill-card">
            <Icon className="skill-icon" strokeWidth={1.5} />
            <span className="skill-name">{skill.name}</span>
          </div>
        );
      })}
    </div>
  </motion.div>
);

const Sobre = () => (
  <motion.div 
    className="page-container sobre-layout"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.6 }}
  >
    <div className="sobre-content">
      <h1 className="hero-title left-align">Sobre Mim</h1>
      <p className="sobre-text left-align">
        22Anos Residente em Sobradinho e graduando em Análise e Desenvolvimento de Sistemas. 
        Minha trajetória na tecnologia começou precocemente, impulsionada pelo universo 
        dos games, que despertou minha curiosidade técnica. Hoje, encaro a tecnologia 
        como uma ferramenta indispensável para elevar a qualidade de vida e busco 
        aplicar meus conhecimentos para desenvolver soluções inovadoras e eficientes.
      </p>
    </div>
  </motion.div>
);

const Projetos = () => (
  <motion.div 
    className="page-container"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="hero-title">Projetos</h1>
    <div className="project-grid">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="project-card">
          <span>Projeto {i}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

// --- ESTRUTURA PRINCIPAL ---

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <nav>
        <LogoAnimada />
        <div className="links">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
        </div>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;