import React from 'react';
import { IPrices } from 'types/prices';

import Observer from '@components/observer/Observer';
import Header from '@share/prices/Header';
import Summary from '@share/prices/Summary';
import Table from '@share/prices/Table';
import Background from '@share/prices/Background';

const index = ({prices}: {prices: IPrices[]}) => {
  return (
    <Observer>
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
    </Observer>
  )
}

export default index