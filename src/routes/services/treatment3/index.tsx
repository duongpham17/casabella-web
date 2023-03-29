import styles from './Treatment3.module.scss';
import React from 'react';

import Image from 'next/image';
import Button from '@components/buttons/Style2';

const Treatment3 = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <h1 className={styles.p2}>Cosmetic Injectables</h1>

            <p className={styles.p3}>Book your complimentary consultation today!</p>

            <p className={styles.p4}>
            Cosmetic Injectables are only performed by highly experienced Medical Practioners using market-leading products - 
            including Allergan, Juvederm, Nucleadyn and Profhilo. We pride ourselves on delivering natural, quality results tailored to your aesthetic objective. 
            Find out more about wrinkle relaxers, dermal fillers and skin boosters today!
            </p>

            <p>Wrinkle Relaxers &#39; Dermal Fillers &#39; Profhilo</p>

            <Button value="book now" padding='1rem 2rem' />
        </div>

        <div className={styles.right}>
          <div/>
          <Image 
              src="/services_woman_3.png"
              alt="woman"
              width={500}
              height={500} 
          />
        </div>

    </div>
  )
}

export default Treatment3