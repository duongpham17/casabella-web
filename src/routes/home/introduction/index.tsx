import styles from './Introduction.module.scss';
import React from 'react';

import Header from '@components/headers/Style1'
import Text from '@components/text/Style1';
import Link from '@components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header value="Where Beauty and Elegance meet" size='clamp(4vw, 4vw, 5vw)' center/>

        <Text value="Step into a realm of indulgence where we celebrate and enhance your distinct radiance." center/>

        <Link value="book now" href={`https://booking.casabellalondon.co.uk`} open padding='1rem 2rem'/>
      </div>
    </div>
  )
}

export default Introduction