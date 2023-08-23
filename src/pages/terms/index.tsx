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
        image={"https://bafkreibuv4p65tev6jweigxh23niuywvvd3kiy54mqan3fkw56cxbq7iie.ipfs.nftstorage.link"}
      />
      <Terms />
    </>
  )
}

export default TermsContainer