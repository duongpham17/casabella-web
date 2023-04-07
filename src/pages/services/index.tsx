import React from 'react';
import Services from 'routes/services';
import Meta from '@components/meta';
import {api} from '@misc/api';
import { IServices } from 'types/services';
import { IReviews } from 'types/reviews';
 
export interface PropsTypes {
  reviews: IReviews[],
  services: IServices[]
};

export const getStaticProps = async () => {
  const services = await api.get('/services');
  const reviews = await api.get('/reviews');

  return {
    props: {
      services: services.data.data || [],
      reviews: reviews.data.data || []
    },
    revalidate: 60 //60 * 60 * 24 * 1  // in days
  }
};

const ServicesContainer = (props: PropsTypes) => {
  return (
    <>
      <Meta 
        title="Services" 
        description='how we work, what we offer, our services and more'
        keywords='nails, reviews, services, nails, eyebrows, facials and more' 
        image={props.services[0].image || "https://bafkreibuv4p65tev6jweigxh23niuywvvd3kiy54mqan3fkw56cxbq7iie.ipfs.nftstorage.link"}
      />
      <Services {...props} />
    </>
  )
}

export default ServicesContainer