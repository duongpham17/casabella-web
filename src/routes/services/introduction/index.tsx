import styles from './Introduction.module.scss';
import React from 'react';
import Header from '@components/headers/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <section>
        <Header value="Discover our services" size="clamp(3vw, 4vw, 5vw)" center color="white"/>
      </section>
    </div>
  )
}

export default Introduction