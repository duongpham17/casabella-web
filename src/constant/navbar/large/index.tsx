import styles from './Large.module.scss';
import React from 'react';
import Link from 'next/link';
import {AiOutlineInstagram} from 'react-icons/ai';
import {links} from '../data';
import useOpen from '@hooks/useOpen';

const Large = () => {

  const {onOpenValue, openValue} = useOpen({initialState: ""});
  
  const onSelected = (value: string) => {
    localStorage.setItem("navbar", value)
    onOpenValue(value);
  };

  return (
    <div className={styles.container}>

      <div className={styles.links}>
        {links.map((el) => 
          <Link 
            key={el.id}
            href={el.href} 
            className={openValue === el.value ? styles.selected : ""}
            onClick={() => onSelected(el.value)}
          >
            {el.name} 
          </Link>
        )}
      </div>

      <div className={styles.brand}>
        <Link href="/" onClick={() => onSelected("home")}>Casa Bella</Link>
      </div>

      <div className={styles.social}>
        <Link href="https://www.google.com/search?q=bitcoin&sxsrf=APwXEdcEQFjW999eOAM1eajuNe9VIVt1qA:1679934728747&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAvoLGxPz9AhWNSUEAHSFrAFAQ_AUoA3oECAEQBQ&biw=1150&bih=948&dpr=1" rel="noopener noreferrer" target="_blank">  
            <AiOutlineInstagram />
        </Link>
      </div>

    </div>
  )
}

export default Large