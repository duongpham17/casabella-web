import styles from './Prices.module.scss';
import React from 'react';
import {Props} from 'pages/prices';

import Button from '@components/buttons/Style1';
import Observer from '@components/observer/Observer';

import Introduction from './introduction';

import Header from '@share/prices/Header';
import Summary from '@share/prices/Summary';
import Table from '@share/prices/Table';
import Background from '@share/prices/Background';

const Prices = (props: Props) => {

  return (
    <div className={styles.container}>
        <Introduction {...props} />

        <Observer>
          {props.prices.map((price) => 
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

        <Observer>
          <Button value="Book now" center padding='1rem 5rem' margin='2rem'/>
        </Observer>
        
    </div>
  )
}

export default Prices