import React from 'react';
// import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from './css/ContactPage.module.css';
import { motion } from 'framer-motion'

class ContactPage extends React.Component {
  render() {
    return (
      <motion.main
        className={styles.container}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ delay: 0.3 }} >
        <div className={styles.container}>
          <div>
            <h1>Contato</h1>
          </div>
          <div className={styles.email}>
            <p>
              Gostou do que viu até aqui? Fique a vontade para entrar em contato
              <span> laurafayec@gmail.com</span> 🌼🌻
            </p>
          </div>
        </div>
      </motion.main>
    );
  }
}

export default ContactPage;
