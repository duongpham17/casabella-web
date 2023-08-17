import styles from './Large.module.scss';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            el.href.includes("http") ?
            <Link 
                key={el.id}
                href={el.href} 
                className={openValue === el.value ? styles.selected : ""}
                rel="noopener noreferrer" target="_blank"
              >
              {el.name} 
            </Link> 
          : 
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
        <Link href="/" onClick={() => onSelected("home")}>
          <Image src="/logo.png" alt="Casa Bella" width={100} height={50} unoptimized/>
        </Link>
      </div>

      <div className={styles.social}>
        <div></div>
        <Link href="https://www.instagram.com/casabellalondon" rel="noopener noreferrer" target="_blank">  
            <small>@casabellalondon</small>
            <AiOutlineInstagram />
        </Link>
      </div>

    </div>
  )
}

export default Large