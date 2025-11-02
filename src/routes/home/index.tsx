import styles from './Home.module.scss';
import React from 'react';
import Introduction from './introduction';
import Video from './video';
import Subservices from './subservices';
import Services from './services';
import Contact from './contact';
import Observer from '@components/observer/Observer';

const Index = () => {
  return (
    <div className={styles.container}>

      <Introduction />

      <Video />

      <Observer>
        <Services/>
      </Observer>

      <Observer>
        <Subservices/>
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </div>
  )
}

export default Index