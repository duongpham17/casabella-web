import styles from './Background.module.scss';
import React from 'react';

interface Props{
    children: React.ReactNode
}

const Background = ({children}:Props) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Background