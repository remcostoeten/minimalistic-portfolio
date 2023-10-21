'use client';
import Grid from "@/components/landing/Grid";
import { containerVariants } from "@/lib/animations";
import { WorkExperience } from "@/lib/experience";
import { motion } from "framer-motion";
import React from "react";

export default function ExperienceItems() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-grid p-card-inner flex flex-col-reverse flex-col gap-s"
    >
      {WorkExperience.map((experience, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`bg-card-inner rounded-card-inner p-card-inner ${experience.highlight ? 'border-2 border-active' : 'border-1 border-gray-500'} `}
        >
          <h3>{experience.title}</h3>
          <p>{experience.description}</p>
          <p>{experience.date}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};