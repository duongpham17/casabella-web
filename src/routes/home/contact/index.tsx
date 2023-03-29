import styles from './Contact.module.scss';
import React from 'react';

import Header from '@components/headers/Style1';
import Text from '@components/text/Style1';
import Email from '@share/email';

const Contact = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <Header value="Contact us" />
            <Text value="Tell people what to reach out about and what to expect after contacting you. Don't forget to choose a storage option for submissions." />
        </div>
        
        <div className={styles.right}>
            <Email />
        </div>

    </div>
  )
}

export default Contact