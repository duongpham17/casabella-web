import styles from './Services.module.scss';
import React from 'react';

import Image from 'next/image';
import useWindow from '@hooks/useWindow';
import Swiper from '@components/swiper';
import Observer from '@components/observer/Observer';

const data = [
    {
        id: "1",
        title: "Advanced Technology",
        des: "At Casa Bella, we will always use the latest technology and products that are safest and most effective for all skin tones",
        src: "/skin1.png"
    },
    {
        id: "2",
        title: "Exceptional Service",
        des: "Our highly-trained therapists are true experts in what they do - and always ready to welcome you to Casa Bella.",
        src: "/skin3.jpg"
    },
    {
        id: "3",
        title: "Exceptional technology",
        des: "We're bringing affordable, easy-to-understand aesthetics to locations that are convenient to your busy life.",
        src: "/skin2.jpg"
    },
]

const Services = () => {

    const {width} = useWindow();

    return (
        <Observer>
            <div className={styles.container}>

                <div className={styles.left}>
                    <p>how we work</p>
                    <h1>We here to help each and every body feel great - here is how we are making that happen.</h1>
                </div>

                <div className={styles.right}>
                    {width >= 900 
                        ? 
                            data.map(el => 
                                <div className={styles.element} key={el.id}>
                                    <div className={styles.image}>
                                        <Image src={el.src} alt="skin care" width={300} height={400} />
                                        <p className={styles.id}>{el.id}</p>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={styles.title}>{el.title}</p>
                                        <p className={styles.des}>{el.des}</p>
                                    </div>
                                </div>    
                            ) 
                        : 
                            <Swiper data={data} slidersPerView={width >= 600 ? 2 : 1} arrows>
                                {(el) => 
                                    <div className={styles.element} key={el.id}>
                                        <div className={styles.image}>
                                            <Image src={el.src} alt="skin care" width={300} height={400} />
                                            <p className={styles.id}>{el.id}</p>
                                        </div>
                                        <div className={styles.info}>
                                            <p className={styles.title}>{el.title}</p>
                                            <p className={styles.des}>{el.des}</p>
                                        </div>
                                    </div>    
                                }
                            </Swiper>
                    }
                </div>
            </div>
        </Observer>
    )
}

export default Services