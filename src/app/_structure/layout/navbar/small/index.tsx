import styles from './Small.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Squeeze as Hamburger } from 'hamburger-react';
import useOpen from '../../../hooks/useOpen';
import { links } from '../data';
import Observer from '../../../components/observer/Observer';
import {AiOutlineInstagram} from 'react-icons/ai';

const Small = () => {
  
  const {open, setOpen, onOpen} = useOpen({initialState: ""});


  useEffect(() => {
    if(open) document.body.classList.add("bodyScrollBar");
    return () => document.body.classList.remove('bodyScrollBar');
}, [open]);

  return (
    <div className={styles.container}>

      <div className={`${styles.header} ${open ? styles.hamburgerIsOpen : ""}`}>      
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Casa Bella" width={100} height={50} unoptimized/>
        </Link>
        <Hamburger onToggle={onOpen} toggled={open}/>
      </div>

      <Observer>
        <div className={`${styles.menu} ${open ? styles.menuIsOpen : styles.menuIsClose}`}>
          <div className={styles.contents}>
            <ul> 
            {links.map((el) => 
              el.href.includes("http") ?
                <Link 
                    key={el.id}
                    href={el.href} 
                    rel="noopener noreferrer" target="_blank"
                  >
                  {el.name} 
                </Link> 
              : 
                  <Link 
                    key={el.id}
                    href={el.href} 
                    onClick={onOpen}
                  >
                  {el.name} 
                </Link>
              )}
            </ul>
            <div className={styles.social}>
              <Link href="https://www.instagram.com/casabellalondon" rel="noopener noreferrer" target="_blank">  
                <AiOutlineInstagram className={styles.insta}/>
                <small>@casabellalondon</small>
              </Link>
            </div>
          </div>
        </div>
      </Observer>
      
    </div>
  )
}

export default Small