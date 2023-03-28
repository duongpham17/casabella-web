import styles from './Style1.module.scss';
import React from 'react';

interface Props {
  value: any,
  size?: string, 
  center?: boolean,
  margin?: string,
}

const Style1 = ({value, size, center=false, margin}: Props) => {
  return (
    <h1 
      className={styles.container} 
      style={{fontSize: size, textAlign: center ? "center" : "left", margin: margin}}>
        {value}
      </h1>
  )
}

export default Style1