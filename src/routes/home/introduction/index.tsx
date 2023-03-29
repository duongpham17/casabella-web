import styles from './Introduction.module.scss';
import React from 'react';

import Header from '@components/headers/Style1'
import Button from '@components/buttons/Style1';
import Text from '@components/text/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
        <section>

            <Header value="Introduce your brand" size='clamp(4vw, 5vw, 6vw)' center/>

            <Text value="Welcome people to your site with an introduction that's short, sweet, and sounds like you" center/>
            
            <Button value="Book now" padding='1rem 4rem' />
            
        </section>
    </div>
  )
}

export default Introduction