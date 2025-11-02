import React from 'react';
import Terms from 'routes/terms';
import Meta from '@components/meta';

const TermsContainer = () => {
  return (
    <>
      <Meta 
        title="Terms & Conditions" 
        description='how we operate, our terms and conditions for all our services.'
        keywords='terms and conditions' 
      />
      <Terms />
    </>
  )
}

export default TermsContainer