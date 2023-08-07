import styles from './Introduction.module.scss';
import React from 'react';

import Header from '@components/headers/Style1'
import Text from '@components/text/Style1';
import Link from '@components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
        <section>

            <Header value="Introduce your brand" size='clamp(4vw, 5vw, 6vw)' center/>

            <Text value="Welcome people to your site with an introduction that's short, sweet, and sounds like you" center/>
            
            <Link value="discover services" href="/services" padding='1rem 2rem'/>
            
        </section>
    </div>
  )
}

export default Introduction