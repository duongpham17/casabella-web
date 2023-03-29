import styles from './Prices.module.scss';
import React from 'react';

import Introduction from './introduction';
import Nails from './nails';
import Facials from './facials';
import Waxing from './waxing';

import Observer from '@components/observer/Observer';

const Prices = () => {
  return (
    <div className={styles.container}>
        <Introduction />

        <Observer>
          <Facials />
        </Observer>
        
        <Observer>
          <Nails />
        </Observer>

        <Observer>
          <Waxing />
        </Observer>
        
    </div>
  )
}

export default Prices