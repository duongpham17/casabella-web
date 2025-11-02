import styles from './video.module.scss';

const Video = () => {

  return (
    <div className={styles.container}>

      <b>Discover our services</b>

      <div className={styles.video}>
        <video muted loop id="myVideo" controls>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Video