import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from './css/MainPage.module.css';
import Navbar from '../components/Navbar';
import ParticlesBackground from '../components/ParticlesBackground';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <ParticlesBackground />
        <div className={styles.container}>
          <div>
            <h1>Desenvolvedora web Fullstack</h1>
          </div>
          <div>
            <p>
              Oi, me chamo Laura. Apaixonada por desenvolvimento web. <br />
              Atualmente vivendo em Florianópolis. 🌼🌻
            </p>
            <div className={styles.icons}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href="/download-cv">
                <FaDownload className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainPage;
