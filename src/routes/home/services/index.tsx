import styles from './Services.module.scss';
import React from 'react';

import {IServices} from 'types/services';

import Link from 'next/link';

const SservicesContainer = ({services}: {services: IServices[]}) => {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <b>Treatments for you</b>
            </div>

            {services.map((el) => 
                <Link href={`/services/#${el.text_2}`} key={el._id} className={styles.element}>
                    <img src={el.image} alt="treatments"/>
                    <span>{el.text_2}</span>
                </Link>
            )}

        </div>
    )
}

export default SservicesContainer