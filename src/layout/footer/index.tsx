import styles from './Footer.module.scss'
import React from 'react';

import Observer from '@components/observer/Observer';
import Header from '@components/headers/Style1';
import Text from '@components/text/Style1';
import Link from 'next/link';

const Footer = () => {
  return (
    <Observer>

        <div className={styles.line} ></div>

        <footer className={styles.container}>
            <div>
                <Header value="Location" size='1rem' center margin='1rem'/>
                <Text value="209 Haverstock Hill" center />
                <Text value="NW3 4QG" center/>
            </div>

            <div>
                <Header value="Hours" size='1rem' center margin='1rem'/>
                <Text value="Monday - Sunday" center />
                <Text value="10:00 am - 8:00 pm" center/>
            </div>

            <div>
                <Header value="Contact" size='1rem' center margin='1rem' />
                <Text value={<a href="mailto:hello@casabellalondon.co.uk">hello@casabellalondon.co.uk</a>} center />
                <Text value={<a href="tel:02086167977">020 8616 7977</a>} center/>
            </div>
        </footer>

        <div className={styles.line} ></div>
        <div className={styles.container}>
            <Link href="/terms">Terms & Conditions</Link>
        </div>
    </Observer>
  )
}

export default Footer