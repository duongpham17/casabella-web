import styles from './Table.module.scss';
import React from 'react';
import { PricesDataSubsetsProps } from './@types';

const Table = ({data}: {data: PricesDataSubsetsProps }) => {
  return (
    <div className={styles.container}>
        <table>
            <thead>
                <tr>
                    <th className={styles.name}>TREATMENT</th>
                    <th>SINGLE PRICE</th>
                    {data.bulk_discount === 0 ? "" :
                        <th className={styles.bulk}>
                            <span>BUY 3+</span>
                            <span className={styles.bulk_discount}>{data.bulk_discount}% OFF</span>
                        </th>
                    }
                </tr>
            </thead>
            <tbody>
                {data.items.map(el => 
                    <tr key={el.name}>

                        <td className={styles.name}>
                            <span>{el.name}</span>
                            {el.discount > 0 && <span>{el.discount}% OFF</span>}
                        </td>

                        {el.discount > 0  
                            ?  
                                <td className={styles.price}>
                                    <s>£{el.price}</s>
                                    <span>£{Math.ceil(el.price * (1-(el.discount / 100)))}</span>
                                </td>
                            :     
                                <td className={styles.price}>£{el.price}</td>
                        }

                        {data.bulk_discount === 0 ? "" :
                            el.bulk_discount ?
                            <td className={styles.price}>
                                <s>£{el.bulk_price}</s>
                                <span>£{Math.ceil(el.bulk_price * (1-(data.bulk_discount / 100)))}</span>
                            </td>
                            :
                            <td className={styles.price}>£{el.bulk_price}</td>
                        }
                        
                    </tr>    
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table