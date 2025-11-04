import styles from './Introduction.module.scss';
import Header from '_structure/components/headers/Style1'
import Link from '_structure/components/link/Style1';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header value="Where Beauty and Elegance meet" size='clamp(4vw, 4vw, 5vw)' center color="white"/>

        <Link value="book now" href={`https://booking.casabellalondon.co.uk`} open padding='1rem 2rem'/>
      </div>
    </div>
  )
}

export default Introduction