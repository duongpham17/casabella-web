import styles from './video.module.scss';

const Video = () => {

  return (
    <div className={styles.container}>

      <b>Discover our services</b>

      <div className={styles.video}>
        <video muted loop id="myVideo" controls>
          <source src="https://bafybeif54rb6lx6ayaniind3h7ws3zczwxw5smma3r7ed2ryorgcro7z6u.ipfs.nftstorage.link" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Video