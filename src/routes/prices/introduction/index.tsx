import styles from './Introduction.module.scss';
import React from 'react';
import Header from '@components/headers/Style1';
import Link from '@components/link/Style2';
import {PropsTypes} from 'pages/prices';

const Introduction = (props: PropsTypes) => {

  const titles = props.prices.map(el => el.title);

  return (
    <div className={styles.container}>
      <section>
        <Header value="Discover all our prices" size="clamp(5vw, 6vw, 7vw)" color="white" center/>

        <div className={styles.buttons}>
          {titles.map((el,index) => 
            <Link key={`${index} ${el}`} href={`#${el.toLowerCase()}`} value={el} margin="1rem" />
          )}
        </div>
      </section>
    </div>
  )
}

export default Introduction