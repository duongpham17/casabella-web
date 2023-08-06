import styles from './Footer.module.scss'
import React from 'react';

import Observer from '@components/observer/Observer';
import Header from '@components/headers/Style1';
import Text from '@components/text/Style1';

const Footer = () => {
  return (
    <Observer>
        <footer className={styles.container}>
            <div>
                <Header value="Location" size='1rem' center margin='1rem'/>
                <Text value="123 Bitcoin Street" center />
                <Text value="New moon, BTC 12345" center/>
            </div>

            <div>
                <Header value="Hours" size='1rem' center margin='1rem'/>
                <Text value="Monday - Friday" center />
                <Text value="11:00 am - 11:00 pm" center/>
            </div>

            <div>
                <Header value="Contact" size='1rem' center margin='1rem' />
                <Text value="Email@example.com" center />
                <Text value="(+44) 12345 678910" center/>
            </div>
        </footer>
    </Observer>
  )
}

export default Footer