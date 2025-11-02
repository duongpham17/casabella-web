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
      />
      <Contact/>
    </>
  )
}

export default ContactContainer