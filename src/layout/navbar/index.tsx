import styles from './Navbar.module.scss';
import React from 'react';

import useWindowSize from '@hooks/useWindow';

import Small from './small2';
import Large from './large';

const Index = () => {

    const {width} = useWindowSize();
    
    return (
        <div className={styles.container}>

            { width >= 800  
                ?
                    <Large />
                :
                    <Small />
            }
            
        </div>
    )
}

export default Index