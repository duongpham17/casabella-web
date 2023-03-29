import styles from './Introduction.module.scss';
import React from 'react';
import Header from '@components/headers/Style1';
import {CgArrowLongRight} from 'react-icons/cg';
import {data} from './data';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <section>
        <Header value="Discover all our prices" size="clamp(5vw, 6vw, 7vw)" color="white" center/>

        <div className={styles.buttons}>
          {data.map(el => 
            <a key={el.id} href={`#${el.value}`}>
              <span>{el.name}</span>
              <span><CgArrowLongRight/></span>
            </a>  
          )}
        </div>
      </section>
    </div>
  )
}

export default Introduction