import styles from './Treatment.module.scss';
import React from 'react';
import {IServices} from 'types/services';
import Button from '@components/buttons/Style2';
import Observer from '@components/observer/Observer';

const Treatment = ({services}: {services: IServices[]}) => {
  return (
    <div className={styles.container}>
    {services.map((el, index) => 
      <Observer key={el._id}>
        <div className={`${styles.element} ${index % 2 !== 0 ? styles.even : styles.odd}`}>
          <div className={styles.text}>
              {el.text_1 && <p className={styles.p1}>{el.text_1}</p>}
              
              {el.text_2 && <h1 className={styles.p2}>{el.text_2}</h1>}

              {el.text_3 && <p className={styles.p3}>{el.text_3}</p>}

              {el.text_4 && <p className={styles.p4}> {el.text_4} </p>}

              {el.text_5 && <p className={styles.p5}> {el.text_5} </p>}

              <Button value="book now" padding='1rem 2rem' />
          </div>

          <div className={styles.image}>
              <div/>
              <img src={el.image} alt="treatments"/>
          </div>
        </div>
      </Observer>
    )}
    </div>
  )
}

export default Treatment