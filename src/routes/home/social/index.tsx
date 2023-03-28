import styles from './Social.module.scss';
import React from 'react';

import Gallery from './Gallery';

import Header from '@components/headers/Style1';
import Link from '@components/link/Style1';

const Social = () => {
  return (
    <div className={styles.container}>
        <Header value="Follow us on social" center margin='2rem' />

        <Gallery />

        <Link value='Social' href="/social" margin="2rem" padding='1rem 2rem' center />
    </div>
  )
}

export default Social