import styles from './Services.module.scss';
import React from 'react';

import Introduction from './introduction';
import Treatments from './treatments';
import Work from './work';
import Reviews from './reviews';

import {PropsTypes} from 'pages/services'; 

const Services = (props: PropsTypes) => {

  return (
    <div className={styles.container}>
      <Introduction />

      <div className={styles.wrapper}>

        <Treatments services={props.services} />  
 
        <Work />
        
        <Reviews reviews={props.reviews}/>

      </div>

    </div>
  )
}

export default Services