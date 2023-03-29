import styles from './Services.module.scss';
import React from 'react';

import Introduction from './introduction';
import Treatment1 from './treatment1';
import Treatment2 from './treatment2';
import Treatment3 from './treatment3';
import Work from './work';
import Reviews from './reviews';

import Observer from '@components/observer/Observer';

const Services = () => {
  return (
    <div className={styles.container}>
      <Introduction />

      <div className={styles.wrapper}>

          <Treatment1 />

        <Observer>
          <Treatment2 />
        </Observer>

        <Observer>
          <Treatment3 />
        </Observer>

        <Observer>
          <Work />
        </Observer>

        <Observer>
          <Reviews/>
        </Observer>
      </div>

    </div>
  )
}

export default Services