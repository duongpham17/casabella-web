import styles from './Email.module.scss';
import React from 'react';

import Header from '@components/headers/Style1';
import Text from '@components/text/Style1';

import Email from '@share/email';

const EmailContainer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <div className={styles.item}>
                <Header value="Contact us" />
                <Text lineHeight='2rem' size='1.2rem' margin="1rem 0" value="
                    Let people know what to reach out about and what to expect after contacting you.
                    Don't forget to choose a storage option for submissions." 
                />
            </div>
            <div className={styles.item}>
                <Text value="Email@example.com" />
                <Text value="(+44) 12345 678910" />
            </div>
            <div className={styles.item}>
                <Text value="123 Demo Street" />
                <Text value="New York, NY 12345" />
            </div>
        </div>
        
        <div className={styles.right}>
            <Email />
        </div>

    </div>
  )
}

export default EmailContainer