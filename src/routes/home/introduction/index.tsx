import styles from './Introduction.module.scss';
import React from 'react';

import Header from '@components/headers/Style1'
import Text from '@components/text/Style1';
import Link from '@components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
        <section>

            <Header value="Where Beauty and Elegance meet" size='clamp(4vw, 5vw, 6vw)' center/>

            <Text value="Step into a realm of indulgence where we celebrate and enhance your distinct radiance." center/>
            
            <Link value="book now" href="http://casabella.zenoti.com/webstorenew" open padding='1rem 2rem'/>
            
        </section>
    </div>
  )
}

export default Introduction