import styles from './Reviews.module.scss';
import React from 'react';
import { IReviews } from 'types/reviews';
import { AiTwotoneStar } from 'react-icons/ai';
import { generateid } from '@utils/function';

import Swiper from '@components/swiper';
import useWindow from '@hooks/useWindow';
import Observer from '@components/observer/Observer';


interface Props {
    reviews: IReviews[]
}

const Reviews = ({reviews}: Props ) => {

    const {width} = useWindow();

    return (
        <Observer>
            <div className={styles.container}>

                <h1>What our customers say about Casa Bella</h1>

                <Swiper data={reviews} slidersPerView={width >= 1000 ? 3 : width >= 700 ? 2 : 1} arrows>
                    {(el) => 
                        <div key={el._id} className={styles.element}>
                            <p className={styles.title}><q>{el.title}</q></p>
                            <p className={styles.review}>{el.review}</p>
                            <span>{[...new Array(el.stars)].map(() => <AiTwotoneStar key={generateid()}/>)}</span>
                        </div>
                    }
                </Swiper>

            </div>
        </Observer>
    )
};

export default Reviews;