'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Box: React.FC = () => {
  const boxVariants = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const shadowVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1, transition: { duration: 1 } },
  };

  return (
    <div>
      <h1>Welcome to my page!</h1>
      <motion.div className="container" variants={containerVariants} initial="initial" animate="animate">
        {[1, 2, 3, 4, 5].map((key) => (
          <motion.div key={key} className="box" variants={boxVariants} />
        ))}
        <motion.div className="container" variants={containerVariants} initial="initial" animate="animate">
          <motion.div className="box-container">
            <motion.div className="box-left" variants={boxVariants} />
            <motion.div className="box-right" variants={boxVariants} />
          </motion.div>
          <motion.div className="shadow" variants={shadowVariants} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Box;
