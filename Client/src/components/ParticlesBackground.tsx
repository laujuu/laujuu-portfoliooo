import React, { useEffect } from 'react';
import styles from './css/ParticlesBackground.module.css';

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-background');

    if (particlesContainer) {
      const numParticles = 50;

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add(styles.particle);

        const size = Math.floor(Math.random() * 10 + 5);
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;

        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return <div id="particles-background" className={styles.container} />;
};

export default ParticlesBackground;
