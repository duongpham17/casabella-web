"use client";

import styles from './Subservices.module.scss';
import {data} from '_structure/data/treatments';
import useWindow from '_structure/hooks/useWindow';
import Swiper from '_structure/components/swiper';

const SubservicesContainer = () => {

    const {width} = useWindow();

    const subservices = data.filter(el => el.type === "subservices");

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <b>How we work</b>
                <h1>We are here to help each and every body feel great - here is how we are making that happen.</h1>
            </div>

            <div className={styles.images}>
                {width >= 900 
                    ? 
                        subservices.map((el, index) => 
                            <div className={styles.element} key={el.id}>
                                <div className={styles.image}>
                                    <img src={el.image} alt="skin care" width={300} height={400} />
                                    <p className={styles.id}>{index+1}</p>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.title}>{el.text_1}</p>
                                    <p className={styles.des}>{el.text_2}</p>
                                </div>
                            </div>    
                        ) 
                    : 
                        <Swiper data={subservices} slidersPerView={width >= 600 ? 2 : 1} arrows>
                            {(el, index) => 
                                <div className={styles.element} key={el.id}>
                                    <div className={styles.image}>
                                        <img src={el.image} alt="skin care" width={300} height={400} />
                                        <p className={styles.id}>{index+1}</p>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={styles.title}>{el.text_1}</p>
                                        <p className={styles.des}>{el.text_2}</p>
                                    </div>
                                </div>    
                            }
                        </Swiper>
                }
            </div>
        </div>
    )
}

export default SubservicesContainer