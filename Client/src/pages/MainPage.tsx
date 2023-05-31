import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from './css/MainPage.module.css';
import { motion } from 'framer-motion'

class MainPage extends React.Component {
  render() {
    return (
      <motion.main
      className={styles.container}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ delay: 0.3 }} >
        <div >
          <div>
            <h1>Desenvolvedora Web Fullstack</h1>
          </div>
          <div>
            <p>
              Oi, me chamo Laura. Apaixonada por desenvolvimento web. <br />
              Atualmente vivendo em Florianópolis. 🌼🌻
            </p>
            <div className={styles.icons}>
              <a href="https://www.linkedin.com/in/laura-julia-pires" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
              <a href="https://github.com/laujuu" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href="../assets/curriculo-laura.pdf" download>
                <FaDownload className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </motion.main>
    );
  }
}

export default MainPage;
