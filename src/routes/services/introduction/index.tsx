import styles from './Introduction.module.scss';
import React from 'react';
import Header from '@components/headers/Style1';
import {CgArrowLongRight} from 'react-icons/cg';
import {data} from './data';

import Link from '@components/link/Style2';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <section>
        <Header value="Discover our services" size="clamp(5vw, 6vw, 7vw)" center/>

        <div className={styles.buttons}>
          {data.map(el => 
            <Link key={el.id} href={`#${el.value}`} value={el.name} id={el.value} />
          )}
        </div>
      </section>
    </div>
  )
}

export default Introduction