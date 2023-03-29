import React from 'react';

import {data} from './data';

import Header from '@share/prices/Header';
import Summary from '@share/prices/Summary';
import Table from '@share/prices/Table';
import Background from '@share/prices/Background';

const Facial = () => {
    return (
        <div id={data.title.toLowerCase()}>
            <Header value={data.title} />

            <Background>

            {data.subsets.map(el => 
                <Summary value={el.title} key={el.title}>
                    <Table data={el}/>
                </Summary>    
            )}

            </Background>
        </div>
    )
}

export default Facial