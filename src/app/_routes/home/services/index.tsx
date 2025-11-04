import styles from './Services.module.scss';
import React from 'react';
import Link from 'next/link';
import {data} from '_structure/data/treatments';

const SservicesContainer = () => {

    const services = data.filter(el => el.type === "services");

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <b>Treatments for you</b>
            </div>

            {services.map((el) => 
                <Link href={`/services/#${el.text_2}`} key={el.id} className={styles.element}>
                    <img src={el.image} alt="treatments"/>
                    <span>{el.text_2}</span>
                </Link>
            )}

        </div>
    )
}

export default SservicesContainer