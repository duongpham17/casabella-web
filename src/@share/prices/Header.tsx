import styles from './Header.module.scss';
import React from 'react';

interface Props{
    value: any
}

const header = ({value}: Props) => {
  return (
    <div className={styles.container}>
        <h1>{value}</h1>
    </div>
  )
}

export default header