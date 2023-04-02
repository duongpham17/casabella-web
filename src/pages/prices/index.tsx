import React from 'react';
import Meta from '@components/meta';
import Prices from 'routes/prices';

import api from '@misc/api';

export interface Props {
  prices:{
    _id: string,
    title: string,
    createdAt: Date,
    subsets:{
      id: string,
      title: string,
      type: "price" | "bulk",
      bulk_discount: number,
      items: {
          subsetId: string,
          id: string,
          name: string,
          price: number,
          discount: number,
          bulk_price: number,
          bulk_discount: boolean,
      }[]
    }[]
  }[]
}; 

export const getStaticProps = async () => {
  const res = await api.get('/prices');

  return {
    props: {
      prices: res.data.data || []
    },
    revalidate: 60 * 60 * 24 * 1  // in days
  }
};

const PricesContainer = (props: Props) => {
  return (
    <>
      <Meta title="Prices" />
      <Prices {...props} />
    </>
  )
};

export default PricesContainer