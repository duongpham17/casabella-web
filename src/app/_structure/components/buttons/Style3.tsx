import styles from './Style3.module.scss';
import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    value: string,
    color?: "main" | "white" | "light" | "black",
    padding?: string,
    margin?: string,
    center?: boolean,
    open?: boolean,
}

const Style3 = ({value, color="main", padding, margin, center, open, ...props}: Props) => (
    <div className={`${styles.container} ${center ? styles.center : ""}`}>
        <button className={`${styles[color]} ${open ? styles.selected:""}`} style={{padding: padding, margin: margin}} {...props}>
            <span>{value}</span>
            <MdKeyboardArrowRight className={open ? styles.open : styles.close}/>
        </button>
    </div>
)

export default Style3