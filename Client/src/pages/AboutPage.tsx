import React from 'react';
import { motion } from 'framer-motion';
import styles from './css/AboutPage.module.css';
import userPhoto from '../components/Screenshot.png';

class Aboutpage extends React.Component {
  render() {
    return (
      <motion.main
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <div>
            <div>
                <div className={styles.container}>
                    <h1>Sobre</h1>
                </div>
                <div className={styles.photoContainer}>
                    <img src={userPhoto} alt="Foto do usuário" />
                 </div>
              <p  className={styles.aboutContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ex
                sit amet sollicitudin venenatis. In hac habitasse platea dictumst. Proin
                finibus pulvinar elit, id pretium mauris consectetur nec. Integer dapibus
                magna id tincidunt tristique. Aliquam vel ultricies mauris. Nulla facilisi.
                Integer sed metus est.
              </p>
              <h2>Stacks</h2>
              <div className={styles.icons}>
              <i className="devicon-react-original-wordmark colored"></i>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i> 
              <i className="devicon-javascript-plain colored"></i>
              <br />
              <i className="devicon-docker-plain-wordmark colored"></i>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
              <i className="devicon-mysql-plain-wordmark colored"></i>
              <i className="devicon-express-original-wordmark colored"></i>
              <i className="devicon-typescript-plain colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            </div>
          </div>
        </div>
      </motion.main>
    );
  }
}

export default Aboutpage;
