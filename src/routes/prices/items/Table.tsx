import styles from './Table.module.scss';
import React from 'react';
import {IPricesSubsets} from 'types/prices';

const Table = ({subset}: {subset: IPricesSubsets }) => {
  return (
    <div className={styles.container}>
        <table>
            <thead>
                <tr>
                    <th className={styles.name}>TREATMENT</th>
                    <th>SINGLE PRICE</th>
                    {subset.bulk_discount === 0 ? "" :
                        <th className={styles.bulk}>
                            <span>BUY 3+</span>
                            <span className={styles.bulk_discount}>{subset.bulk_discount}% OFF</span>
                        </th>
                    }
                </tr>
            </thead>
            <tbody>
                {subset.items.map(el => 
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

                        {subset.bulk_discount === 0 ? "" :
                            el.bulk_discount ?
                            <td className={styles.price}>
                                <s>£{el.bulk_price}</s>
                                <span>£{Math.ceil(el.bulk_price * (1-(subset.bulk_discount / 100)))}</span>
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