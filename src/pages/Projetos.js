import React from 'react';
import { motion } from 'framer-motion';

const Projetos = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container"
    >
      <h1 className="text-outline">Projetos</h1>
      <div className="project-grid">
        {/* Espaço reservado para os 4 projetos futuros */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="project-card-placeholder">
            <p>Projeto {i}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projetos;