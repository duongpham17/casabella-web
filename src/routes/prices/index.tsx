import React from 'react';
import {PropsTypes} from 'pages/prices';

import Button from '@components/buttons/Style1';
import Observer from '@components/observer/Observer';

import Introduction from './introduction';
import Items from './items';

const Prices = (props: PropsTypes) => {

  return (
    <>
        <Introduction {...props} />

        <Items prices={props.prices} />

        <Observer>
          <Button value="Book now" center padding='1rem 5rem' margin='2rem'/>
        </Observer>
        
    </>
  )
}

export default Prices