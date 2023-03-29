import styles from './Summary.module.scss';
import React, {useState} from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';

interface Props{
  value: any,
  children: React.ReactNode
}

const Summary = ({value, children}: Props) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>

      <div className={styles.button} onClick={() => setOpen(!open)} tabIndex={1}>
        <p className={open ? styles.valueOpen : ""}>{value}</p>
        <button><MdKeyboardArrowDown className={open ? styles.iconOpen : styles.iconClose}/></button>
      </div>

      <div className={`${styles.summary} ${open ? styles.dropdownOpen : styles.dropdownClose}`}>
        {children}
      </div>
      
    </div>
  )
}

export default Summary