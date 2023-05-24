import React from 'react';
// import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from './css/MainPage.module.css';
import { motion } from 'framer-motion'

class Aboutpage extends React.Component {
  render() {
    return (
        <motion.main 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: 1 }} >
        <div className={styles.container}>
          <div>
            <h1>Sobre</h1>
          </div>
        </div>
      </motion.main>
    );
  }
}

export default Aboutpage;
