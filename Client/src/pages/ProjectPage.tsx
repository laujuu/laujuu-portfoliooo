import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

class ProjectPage extends React.Component {
  render() {
    return (
      <motion.main
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ delay: 0.3 }}>
            <Carousel />
        </motion.div>
      </motion.main>
    );
  }
}

export default ProjectPage;
