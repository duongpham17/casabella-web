import styles from './Prices.module.scss';
import React from 'react';

import Introduction from './introduction';
import Nails from './nails';
import Facials from './facials';
import Waxing from './waxing';

import Button from '@components/buttons/Style1';

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


        <Observer>
          <Button value="Book now" center padding='1rem 5rem' margin='2rem'/>
        </Observer>
        
    </div>
  )
}

export default Prices