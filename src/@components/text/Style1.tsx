import styles from './style1.module.scss';
import React from 'react';

interface Props {
  value: any,
  size?: string,
  lineHeight?: string,
  weight?: string,
  center?: boolean,
}

const Style1 = ({value, lineHeight, size, weight, center}: Props) => {
  return (
    <p className={styles.container} style={{fontSize: size, lineHeight: lineHeight, fontWeight: weight, textAlign: center ? "center" : "left"}}>{value}</p>
  )
}

export default Style1