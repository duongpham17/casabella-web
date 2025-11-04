import styles from './Footer.module.scss'
import Observer from '_structure/components/observer/Observer';
import Header from '_structure/components/headers/Style1';
import Text from '_structure/components/text/Style1';
import Link from 'next/link';

const Footer = () => {
  return (
    <Observer>
    <footer className={styles.container}>
        <div className={styles.line} />

        <section className={styles.time}>
            <div>
                <Header value="Location" size='1rem' center margin='1rem'/>
                <Text value="209 Haverstock Hill" center />
                <Text value="NW3 4QG" center/>
            </div>

            <div>
                <Header value="Hours" size='1rem' center margin='1rem'/>
                <Text value="Monday - Sunday" center />
                <Text value="10:00 am - 8:00 pm" center/>
            </div>

            <div>
                <Header value="Contact" size='1rem' center margin='1rem' />
                <Text value={<a href="mailto:hello@casabellalondon.co.uk">hello@casabellalondon.co.uk</a>} center />
                <Text value={<a href="tel:02086167977">020 8616 7977</a>} center/>
            </div>
        </section>

        <div className={styles.line} />

        <section className={styles.links}>
            <Link href="/terms">Terms & Conditions</Link>
        </section>

        <div className={styles.line} />

        <section className={styles.copyright}>
            <small>@ 2025 casabellalondon.co.uk. All rights reserved</small>
        </section>

    </footer>
    </Observer>
  )
}

export default Footer