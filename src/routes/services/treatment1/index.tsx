import styles from './Treatment1.module.scss';
import React from 'react';

import Image from 'next/image';
import Button from '@components/buttons/Style2';

const Treatment1 = () => {
  return (
    <div className={styles.container} id="treatment1">

        <div className={styles.left}>
            <p className={styles.p1}>Good bye razor, Hello laser</p>

            <h1 className={styles.p2}>Laser Hair Removal</h1>

            <p className={styles.p3}>Medical-grade laser hair removal for ALL skin tones and ALL skin types</p>

            <p className={styles.p4}>
            We only use medical-grade FDA-approved Candela Gentle Max Pro lasers for safe, effective and quick permanent hair reduction. 
            Our unique lasers deliver the same results (80-90% permanent reduction) in the same amount of time for ALL skin types and skin tones.
            </p>

            <Button value="book now" padding='1rem 2rem' />
        </div>

        <div className={styles.right}>
            <div/>
            <Image 
                src="/services_woman.png"
                alt="woman"
                width={500}
                height={500} 
            />
        </div>

    </div>
  )
}

export default Treatment1