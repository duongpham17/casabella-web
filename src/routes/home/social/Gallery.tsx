import styles from './Gallery.module.scss';
import React from 'react';
import Swiper from '@components/swiper/index';
import useWindowSize from '@hooks/useWindow';
import Image from 'next/image';

const images = [
    {
        name: "item 1",
        src: "/item1.webp",
    },
    {
        name: "item 2",
        src: "/item2.webp",
    },
    {
        name: "item 3",
        src: "/item3.webp",
    },
    {
        name: "item 4",
        src: "/item4.webp",
    },
    {
        name: "item 5",
        src: "/item5.webp",
    },
]

const Gallery = () => {

    const {width} = useWindowSize()

    return (
        <div className={styles.container}>
            <Swiper data={images} slidersPerView={width >= 1200 ? 5 : width >= 1000 ? 4 : width >= 800 ? 3 : width >= 600 ? 2 : 1}>
                {(el) => 
                    <div key={el.name}>
                        <Image 
                            src={el.src} 
                            alt="cryptos"
                            objectFit="cover"
                            width={100}
                            height={100}
                            layout='responsive'
                        />
                    </div>
                }
            </Swiper>
        </div>
    )
}

export default Gallery