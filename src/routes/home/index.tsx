import styles from './Home.module.scss';
import React from 'react';

import Introduction from './introduction';
import Video from './video';
import Subservices from './subservices';
import Services from './services';
import Contact from './contact';

import Observer from '@components/observer/Observer';

import { PropsTypes } from 'pages';

const Index = (props: PropsTypes) => {
  return (
    <div className={styles.container}>

      <Introduction />

      <Video />

      <Observer>
        <Services services={props.services}/>
      </Observer>

      <Observer>
        <Subservices subservices={props.subservices}/>
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </div>
  )
}

export default Index