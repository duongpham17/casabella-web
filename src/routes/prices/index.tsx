import React from 'react';
import {PropsTypes} from 'pages/prices';

import Button from '@components/buttons/Style1';

import Introduction from './introduction';
import Items from './items';

const Prices = (props: PropsTypes) => {

  return (
    <>
      <Introduction {...props} />

      <Items prices={props.prices} />

      <Button value="Book now" center padding='1rem 5rem' margin='2rem'/>
    </>
  )
}

export default Prices