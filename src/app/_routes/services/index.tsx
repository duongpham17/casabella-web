import styles from './Services.module.scss';
import Introduction from './introduction';
import Treatments from './treatments';

const Services = () => {

  return (
    <div className={styles.container}>
      <Introduction />

      <div className={styles.wrapper}>

        <Treatments />  

      </div>

    </div>
  )
}

export default Services