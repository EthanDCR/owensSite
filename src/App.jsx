import Lottie from "lottie-react";
import styles from "../src/app.module.css"
import owenAllen from "../src/assets/OWENALLEN.svg"
import BubbleMenu from "./components/BubbleMenu";
import vx1000 from "../src/assets/video/VX1000WHITE.mp4"
import kavoslogo from "../src/assets/KAVOSSIGNAGEIPHONE.png"
import rustyRida from "../src/assets/video/RUSTYRIDER_TEST.mp4"
import twinHead from "../src/assets/TwinHeadMockup.png"
import { useState } from "react";


function App() {

  const [show, setShow] = useState(false)


  return (
    <div className={styles.page}>
      <nav>
        <BubbleMenu logo={owenAllen}></BubbleMenu>
        <img className={styles.owenAllen} src={owenAllen} />
      </nav>

      <section className={styles.section2}>
        <video
          src={vx1000}
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }}
        />
      </section>

      <section className={styles.section3}>
        <img className={styles.kavoslogo} onClick={() => setShow(true)} src={kavoslogo}></img>
        {show && <h2>sometimes, brian, I don't think... I.. Know you... </h2>}
      </section >

      <section className={styles.section3}>
        <video className={styles.rusty}
          src={rustyRida}
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }}
        />
      </section>

      <section className={styles.section4}>
        <img className={styles.twinhead} src={twinHead} />
      </section>



    </div >
  )
}

export default App
