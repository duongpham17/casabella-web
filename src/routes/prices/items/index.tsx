import React from 'react';
import { IPrices } from 'types/prices';

import Header from './Header';
import Summary from './Summary';
import Table from './Table';
import Background from './Background';

const index = ({prices}: {prices: IPrices[]}) => {
  return (
    <>
        {prices.map((price) => 
            <div id={price.title.toLowerCase()} key={price._id}>
            <Header value={price.title} />

            <Background>

            {price.subsets.map(el => 
              <Summary value={el.title} key={el.title}>
                  <Table data={el}/>
              </Summary>    
            )}

            </Background>
        </div>  
        )}
    </>
  )
}

export default index