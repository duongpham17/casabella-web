import styles from './Home.module.scss';
import Introduction from './introduction';
import Video from './video';
import Services from './services';
import Subservices from './subservices';
import Contact from './contact';
import Observer from '_structure/components/observer/Observer';

const HomeRoute = () => {
  return (
    <section className={styles.container}>

      <Introduction />

      <Video />

      <Observer>
        <Services/>
      </Observer>

      <Observer>
        <Subservices/>
      </Observer>

      <Observer>
        <Contact />
      </Observer>

    </section>
  )
}

export default HomeRoute