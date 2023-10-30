'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimationDemo: React.FC = () => {
  const [boxes, setBoxes] = useState<Array<{ stiffness: number; xValue: number }>>([
    { stiffness: 100, xValue: 100 },
    { stiffness: 100, xValue: 100 },
    { stiffness: 100, xValue: 100 },
    { stiffness: 100, xValue: 100 },
    { stiffness: 100, xValue: 100 },
  ]);
  const [duration, setDuration] = useState<number>(1);
  const [selectedExample, setSelectedExample] = useState<number | null>(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const circleVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const boxVariants = (stiffness: any, xValue: any) => ({
    initial: { x: -xValue },
    animate: {
      x: xValue,
      transition: {
        type: 'spring',
        stiffness: stiffness,
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  });

  const handleStiffnessChange = (index: number, value: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box, i) => (i === index ? { ...box, stiffness: value } : box))
    );
  };

  const handleXValueChange = (index: number, value: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box, i) => (i === index ? { ...box, xValue: value } : box))
    );
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  const handleExampleClick = (index: number) => {
    setSelectedExample(index);
  };

  return (
    <div className="w-screen h-screen p-16 grid text-white place-items-center">
      <h1 className="text-4xl font-bold mb-4">Framer Motion Animation Demo</h1>
      <div className="flex flex-col gap-2">
        <div className="slider-container">
          <label htmlFor="duration">Duration:</label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            id="duration"
            value={duration}
            onInput={handleDurationChange}
          />
          <span>{duration}</span>
        </div>
      </div>
      <div className="box-container mt-8">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {[1, 2, 3].map((key) => (
            <motion.div
              key={key}
              className="item cursor-pointer"
              variants={itemVariants}
              onClick={() => handleExampleClick(key)}
            >
              <motion.div className="circle bg-blue-500" variants={circleVariants} />
              <motion.div className="text text-white" variants={textVariants}>
                Example {key}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {[1].map((key) => (
          <div key={key} className="box-container">
            <motion.div
              className="box bg-green-500"
              // @ts-ignore
              variants={boxVariants(boxes[key - 1].stiffness, boxes[key - 1].xValue)}
              initial="initial"
              animate={selectedExample === null || selectedExample === key ? 'animate' : 'initial'}
            ></motion.div>
            <div className="slider-container">
              <label htmlFor={`stiffness-slider-${key}`}>Stiffness {key}:</label>
              <input
                type="range"
                min="1"
                max="1000"
                step="1"
                id={`stiffness-slider-${key}`}
                value={boxes[key - 1].stiffness}
                onInput={(e) => handleStiffnessChange(key - 1, Number((e.target as HTMLInputElement).value))}
              />
              <span>{boxes[key - 1].stiffness}</span>
            </div>
            <div className="slider-container">
              <label htmlFor={`xValue-slider-${key}`}>X Value {key}:</label>
              <input
                type="range"
                min="1"
                max="500"
                step="1"
                id={`xValue-slider-${key}`}
                value={boxes[key - 1].xValue}
                onInput={(e) => handleXValueChange(key - 1, Number((e.target as HTMLInputElement).value))}
              />
              <span>{boxes[key - 1].xValue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationDemo;