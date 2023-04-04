import React from 'react';

import Meta from '@components/meta';
import Contact from 'routes/contact';

const ContactContainer = () => {
  return (
    <>
      <Meta 
        title="Contact" 
        keywords='casa bella, nail shops, london, contact, phone, booking, services, nails, salon, nail shop, luxury' 
        description='prices for nails, facials, manicure, pedicure, treatments and more'
        image={"https://bafkreibuv4p65tev6jweigxh23niuywvvd3kiy54mqan3fkw56cxbq7iie.ipfs.nftstorage.link"}
      />
      <Contact/>
    </>
  )
}

export default ContactContainer