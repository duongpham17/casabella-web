import styles from './Prices.module.scss';
import React from 'react';

import Introduction from './introduction';
import Nails from './nails';
import Facials from './facials';
import Waxing from './waxing';

const Prices = () => {
  return (
    <div className={styles.container}>
        <Introduction />

        <Facials />

        <Nails />

        <Waxing />
    </div>
  )
}

export default Prices