import styles from './Services.module.scss';
import React from 'react';
import Introduction from './introduction';
import Treatments from './treatments';

const Services = () => {

  return (
    <div className={styles.container}>
      <Introduction />

      <div className={styles.wrapper}>

        <Treatments />  

      </div>

    </div>
  )
}

export default Services