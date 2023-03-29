import styles from './Treatment2.module.scss';
import React from 'react';

import Image from 'next/image';
import Button from '@components/buttons/Style2';

const Treatment2 = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <h1 className={styles.p2}>Skin Treatments</h1>

            <p className={styles.p3}>Book your complimentary consultation today!</p>

            <p className={styles.p4}>
              We offer advanced skin treatments for all aesthetics goals - so whether it's hydration, pigmentation or rejuvenation you're after, we've got you covered.
            </p>

            <p>Facials &#39; SkinPen Microneedling &#39; Skin Peels &#39; LED Light Therapy &#39; Laser Treatments</p>

            <Button value="book now" padding='1rem 2rem' />
        </div>

        <div className={styles.right}>
            <div/>
            <Image 
                src="/services_woman_2.png"
                alt="woman"
                width={500}
                height={500} 
            />
        </div>

    </div>
  )
}

export default Treatment2