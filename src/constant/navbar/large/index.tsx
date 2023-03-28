import styles from './Large.module.scss';
import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineInstagram} from 'react-icons/ai';

const links = [
  {
    id: "1",
    name: "Store",
    value: "store",
    href: "/store",
  },
  {
    id: "2",
    name: "Services",
    value: "services",
    href: "/services",
  },
  {
    id: "3",
    name: "Contact",
    value: "contact",
    href: "/contact",
  },
]

const Large = () => {

  const lcoal_navbar_value = localStorage.getItem("navbar");
  
  const [selected, setSelected] = useState(lcoal_navbar_value);

  const onSelected = (value: string) => {
    localStorage.setItem("navbar", value)
    setSelected(value);
  };

  return (
    <div className={styles.container}>

      <div className={styles.links}>
        {links.map((el) => 
          <Link 
            key={el.id}
            href={el.href} 
            className={selected === el.value ? styles.selected : ""}
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