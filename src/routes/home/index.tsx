import styles from './Home.module.scss';
import React from 'react';

import Introduction from './introduction';
import Subservices from './subservices';
import Services from './services';
import Contact from './contact';

import Observer from '@components/observer/Observer';

import { PropsTypes } from 'pages';

const Index = (props: PropsTypes) => {
  return (
    <div className={styles.container}>

      <Introduction />

      <Observer>
        <Subservices subservices={props.subservices}/>
      </Observer>

      <Observer>
        <Services services={props.services}/>
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </div>
  )
}

export default Index