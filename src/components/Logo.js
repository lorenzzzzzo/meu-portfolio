import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fonts = [
  "'Monoton', cursive",
  "'Bungee Shade', cursive",
  "'Special Elite', system-ui",
  "'Pacifico', cursive",
  "'Syncopate', sans-serif",
  "'Creepster', system-ui"
];

const LogoAnimada = () => {
  const nome = "LORENZO".split("");
  // Estado para armazenar a fonte de cada letra
  const [fontStyles, setFontStyles] = useState(nome.map(() => "'Quicksand', sans-serif"));

  useEffect(() => {
    nome.forEach((_, index) => {
      // Gera um tempo aleatório entre 1 e 30 segundos para a troca
      const tempoAleatorio = Math.random() * 29000 + 1000;

      const trocarFonte = () => {
        setFontStyles(prev => {
          const novoEstilo = [...prev];
          const fonteAleatoria = fonts[Math.floor(Math.random() * fonts.length)];
          novoEstilo[index] = fonteAleatoria;
          return novoEstilo;
        });
      };

      // Define o intervalo para cada letra individualmente
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

export default LogoAnimada;