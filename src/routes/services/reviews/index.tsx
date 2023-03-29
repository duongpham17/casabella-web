import styles from './Reviews.module.scss';
import React from 'react';
import {data} from './data';
import {AiTwotoneStar} from 'react-icons/ai';
import {generateid} from '@utils/function';

import Swiper from '@components/swiper';
import useWindow from '@hooks/useWindow';

const Reviews = () => {

    const {width} = useWindow()

    return (
        <div className={styles.container}>

            <h1>That's what our customers say about Casa Bella</h1>

            <Swiper data={data} slidersPerView={width >= 1000 ? 3 : width >= 700 ? 2 : 1} arrows>
                {(el) => 
                    <div key={el.id} className={styles.element}>
                        <p className={styles.title}>"{el.title}"</p>
                        <p className={styles.des}>{el.des}</p>
                        <span>{[...new Array(el.stars)].map(() => <AiTwotoneStar key={generateid()}/>)}</span>
                    </div>
                }
            </Swiper>

        </div>
    )
}

export default Reviews