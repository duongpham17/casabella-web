import styles from './Services.module.scss';
import React from 'react';

import {services_data} from './data';

import Text from '@components/text/Style1';
import Header from '@components/headers/Style1';

const Services = () => {
  return (
    <div className={styles.container}>

      <Header value="Our Services" center/>

      <section>
        {services_data.map(el => 
          <div className={styles.element} key={el.id}>
            <Header value={el.name} size="1rem" margin='0.5rem 0'/>
            <Text value={el.description} />
          </div>  
        )}
      </section>

    </div>
  )
}

export default Services