import styles from './Introduction.module.scss';
import Header from '_structure/components/headers/Style1';

const Introduction = () => {

  return (
    <div className={styles.container}>
      <section>
        <Header value="Contact us" size="clamp(5vw, 6vw, 7vw)" color="black" center/>
      </section>
    </div>
  )
}

export default Introduction