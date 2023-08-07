import styles from './Introduction.module.scss';
import React from 'react';
import Header from '@components/headers/Style1';

const Introduction = () => {

  return (
    <div className={styles.container}>
      <section>
        <Header value="Contact us" size="clamp(5vw, 6vw, 7vw)" color="black" center/>
      </section>
    </div>
  )
}

export default Introduction