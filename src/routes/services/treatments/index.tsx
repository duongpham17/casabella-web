import styles from './Treatment.module.scss';
import React, {useState} from 'react';
import {IServices} from 'types/services';
import Observer from '@components/observer/Observer';
import Link from '@components/link/Style2';
import {Markup} from 'interweave';
import Button from '@components/buttons/Style3';

const Treatment = ({services}: {services: IServices[]}) => {

  const [more, setMore] = useState<string[]>([]);

  const onMore = (id: string) => {
    if(more.includes(id)) {
      setMore(more => more.filter(ids => ids !== id))
    } else {
      setMore(more => [...more, id]);
    }
  }

  return (
    <div className={styles.container}>
    {services.map((el, index) => 
      <Observer key={el._id}>
        <div className={`${styles.element} ${index % 2 !== 0 ? styles.even : styles.odd}`} id={el.text_2}>
          <div className={styles.text}>
              {el.text_1 && <p className={styles.p1}>{el.text_1}</p>}
              
              {el.text_2 && <h1 className={styles.p2}>{el.text_2}</h1>}

              {el.text_3 && <p className={styles.p3}>{el.text_3}</p>}

              {el.text_4 && <p className={styles.p4}> {el.text_4} </p>}

              {el.text_5 && <p className={styles.p5}> {el.text_5} </p>}

              <div className={styles.actions}>
                <Link href="https://booking.casabellalondon.co.uk" value="book now" style={{width: "200px"}} rel="noopener noreferrer" target="_blank" />
                {el.more && <Button value="more" onClick={() => onMore(el._id)} open={more.includes(el._id)} color="light" /> }
              </div>
          </div>

          <div className={styles.image}>
              <div/>
              <img src={el.image} alt="treatments"/>
          </div>
          
          {more.includes(el._id) && 
            <div className={styles.more}>
              <Markup content={el.more}/>
            </div>
          }

        </div>
      </Observer>
    )}
    </div>
  )
}

export default Treatment