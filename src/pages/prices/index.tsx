import React from 'react';
import api from '@misc/api';
import {IPrices} from 'types/prices';

import Meta from '@components/meta';
import Prices from 'routes/prices';

export interface PropsTypes {
  prices: IPrices[]
}; 

export const getStaticProps = async () => {
  const res = await api.get('/prices');

  return {
    props: {
      prices: res.data.data || []
    },
    revalidate: 30 //60 * 60 * 24 * 1  // in days
  }
};

const PricesContainer = (props: PropsTypes) => {
  return (
    <>
      <Meta 
        title="Prices"
        description='prices for nails, facials, manicure, pedicure, treatments and more'
        keywords={props.prices.map(el => el.title).join(",") || "nails, manicure and more"} 
        image={"https://bafkreibuv4p65tev6jweigxh23niuywvvd3kiy54mqan3fkw56cxbq7iie.ipfs.nftstorage.link"}
      />
      <Prices {...props} />
    </>
  )
};

export default PricesContainer