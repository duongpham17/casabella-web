import React from 'react';
import Services from 'routes/services';
import Meta from '@components/meta';
import { api } from '@misc/api';

export const getStaticProps = async () => {
  const services = await api.get('/services/type=services');

  return {
    props: {
      services: services.data.data || [],
    },
    revalidate: 60 * 60 * 24 * 1  // in days
  }
};

const ServicesContainer = () => {
  return (
    <>
      <Meta 
        title="Services" 
        description='how we work, what we offer, our services and more'
        keywords='nails, services, nails, eyebrows, facials, hair cuts and more' 
      />
      <Services />
    </>
  )
}

export default ServicesContainer