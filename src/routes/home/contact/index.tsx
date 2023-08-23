import styles from './Email.module.scss';
import React from 'react';

import Header from '@components/headers/Style1';
import Text from '@components/text/Style1';

import Email from '@share/email';
import {MdOutlineLocationOn, MdEmail, MdOutlinePhoneEnabled} from 'react-icons/md';

const EmailContainer = () => {
  return (
    <div className={styles.container}>

        <section>

            <div className={styles.left}>
                <div className={styles.item}>
                    <div>
                        <Header value="Contact us" />
                        <Text lineHeight='2rem' size='1.2rem' margin="1rem 0" value="
                            We would love to hear from you." 
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <MdEmail size={30}/>
                    <Text value="hello@casabellalondon.co.uk" />
                </div>
                <div className={styles.item}>
                    <MdOutlinePhoneEnabled size={30}/>
                    <Text value="020 8616 7977" />
                </div>
                <div className={styles.item}>
                    <MdOutlineLocationOn size={30}/>
                    <Text value="209 Haverstock Hill, NW3 4QG" />
                </div>
            </div>
            
            <div className={styles.right}>
                <Email />
            </div>
            
        </section>

    </div>
  )
}

export default EmailContainer