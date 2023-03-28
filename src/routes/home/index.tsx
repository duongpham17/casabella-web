import styles from './Home.module.scss';
import React from 'react';

import Introduction from './introudction';
import Services from './services';
import More from './more';
import Social from './social';
import Contact from '../../@share/contact';

import Observer from '@components/observer/Observer';

const Index = () => {
  return (
    <div className={styles.container}>

      <Introduction />

      <Observer>
        <Services />
      </Observer>

      <Observer>
        <More />
      </Observer>

      <Observer>
        <Social />
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </div>
  )
}

export default Index