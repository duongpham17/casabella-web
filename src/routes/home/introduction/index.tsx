import styles from './Introduction.module.scss';
import React from 'react';

import Header from '@components/headers/Style1'
import Text from '@components/text/Style1';
import Link from '@components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
        <section>

            <Header value="Welcome to Casa Bella" size='clamp(4vw, 5vw, 6vw)' center/>

            <Text value="Where Beauty and Elegance meet. Step into a realm of indulgence where we celebrate and enhance your distinct radiance. Explore the craft of refined beauty through our exceptional treatments and tailored care. Your journey to timeless charm begins here." center/>
            
            <Link value="discover services" href="/services" padding='1rem 2rem'/>
            
        </section>
    </div>
  )
}

export default Introduction