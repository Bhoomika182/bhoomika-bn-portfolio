



import React from 'react';
import { FaReact, FaGitAlt, FaNodeJs, FaJava, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiMysql, SiRedis } from 'react-icons/si';
import styles from './TechMarquee.module.css';

const iconSize = 50;

const TechMarquee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        <SiMongodb size={iconSize} className={styles.icon} title="MongoDB" />
        <SiExpress size={iconSize} className={styles.icon} title="Express" />
        <FaReact size={iconSize} className={styles.icon} title="React" />
        <SiRedux size={iconSize} className={styles.icon} title="Redux" />
        <FaGitAlt size={iconSize} className={styles.icon} title="Git" />
        <SiMysql size={iconSize} className={styles.icon} title="SQL" />
        <FaNodeJs size={iconSize} className={styles.icon} title="Node.js" />
        <FaJava size={iconSize} className={styles.icon} title="Core Java" />
        <SiRedis size={iconSize} className={styles.icon} title="Redis" />
        <FaDocker size={iconSize} className={styles.icon} title="Docker" />

        {/* Repeated for smooth loop */}
        <SiMongodb size={iconSize} className={styles.icon} />
        <SiExpress size={iconSize} className={styles.icon} />
        <FaReact size={iconSize} className={styles.icon} />
        <SiRedux size={iconSize} className={styles.icon} />
        <FaGitAlt size={iconSize} className={styles.icon} />
        <SiMysql size={iconSize} className={styles.icon} />
        <FaNodeJs size={iconSize} className={styles.icon} />
        <FaJava size={iconSize} className={styles.icon} />
        <SiRedis size={iconSize} className={styles.icon} />
        <FaDocker size={iconSize} className={styles.icon} />
      </div>
    </div>
  );
};

export default TechMarquee;
