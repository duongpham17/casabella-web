import styles from './Small.module.scss';
import React from 'react';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';
import useOpen from '@hooks/useOpen';
import { links } from '../data';
import Observer from '@components/observer/Observer';
import {AiOutlineInstagram} from 'react-icons/ai';

const Small = () => {
  
  const {open, onOpen, onOpenLocal, openLocal} = useOpen({initialState: "", local: "navbar"});

  const onSelected = (value: string) => {
    onOpenLocal(value);
    onOpen();    
  };

  return (
    <div className={styles.container}>

      <div className={`${styles.hamburger} ${open ? styles.hamburgerIsOpen : ""}`}>      
        <Link href="/" onClick={() => onSelected("home")}><h1>Casa Bella</h1></Link>
        <Hamburger onToggle={onOpen} toggled={open}/>
      </div>

      <Observer>
        <div className={`${styles.menuOpen} ${open ? styles.menuIsOpen : styles.menuIsClose}`}>
          <div className={styles.contents}>
            <ul> 
              {links.map(el => 
                <Link  key={el.id} href={el.href} className={openLocal === el.value ? styles.selected : ""} onClick={() => onSelected(el.value)}>{el.name}</Link>
              )}
            </ul>
            <div className={styles.social}>
              <Link href="https://www.google.com/search?q=bitcoin&sxsrf=APwXEdcEQFjW999eOAM1eajuNe9VIVt1qA:1679934728747&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAvoLGxPz9AhWNSUEAHSFrAFAQ_AUoA3oECAEQBQ&biw=1150&bih=948&dpr=1" rel="noopener noreferrer" target="_blank">  
                <AiOutlineInstagram/>
              </Link>
            </div>
          </div>
        </div>
      </Observer>
      
    </div>
  )
}

export default Small