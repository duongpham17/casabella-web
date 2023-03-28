import styles from './More.module.scss';
import React from 'react';

import Text from '@components/text/Style1';
import Button from '@components/buttons/Style1';

const More = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <div>
                <h1>More about our brand</h1>

                <Text value="Tell people about who you are, your origin, your process, or your inspirations. 
                    Tap into your creativity. You've got this. 
                    The way you tell your story online can make all the difference. 
                    Don't worry about sounding professional. Sound like you." 
                />

                <Button value="Learn more" color='white' />
                
            </div>
        </div>

        <div className={styles.right}>
            <img src="image1.webp" alt="bitcoin"/>
        </div>

    </div>
  )
}

export default More