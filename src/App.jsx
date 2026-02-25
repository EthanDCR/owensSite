import Lottie from "lottie-react";
import styles from "../src/app.module.css";
import owenAllen from "../src/assets/OWENALLEN.svg";
import BubbleMenu from "./components/BubbleMenu";
import vx1000 from "../src/assets/video/VX1000WHITE.mp4";
import kavoslogo from "../src/assets/KAVOSSIGNAGEIPHONE.png";
import rustyRida from "../src/assets/video/RUSTYRIDER_TEST.mp4";
import twinHead from "../src/assets/TwinHeadMockup.png";
import HTMLFlipBook from 'react-pageflip';

function App() {
  return (
    <div className={styles.page}>
      <nav>
        <BubbleMenu logo={owenAllen} />
        <img className={styles.owenAllen} src={owenAllen} alt="Logo" />
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
        <img className={styles.kavoslogo} src={kavoslogo} alt="Kavos Logo" />
      </section>

      <section className={styles.section3}>
        <video
          className={styles.rusty}
          src={rustyRida}
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }}
        />
      </section>

      <section className={styles.section4}>
        <img className={styles.twinhead} src={twinHead} alt="TwinHead Mockup" />
      </section>

      <section className={styles.section5}>
        <HTMLFlipBook
          width={400}
          height={550}
          size="stretch"
          minWidth={150}
          maxWidth={1000}
          minHeight={250}
          maxHeight={1533}
          showCover={false}
          usePortrait={false} // FORCES two pages even on small screens
          startPage={0}
          autoSize={true}
          showOnlyTablet={false}
          className={styles.flipBook}
        >
          {/* Page 1 (Left side) */}
          <div className={styles.demoPage}>
            <img src={kavoslogo} alt="Content 1" className={styles.bookImg} />
          </div>

          {/* Page 2 (Right side) */}
          <div className={styles.demoPage}>
            <div className={styles.pageContent}>
              <h2>Project Alpha</h2>
              <p>Visual identity and digital direction.</p>
            </div>
          </div>

          {/* Page 3 (Left side) */}
          <div className={styles.demoPage}>
            <div className={styles.pageContent}>
              <h2>Process</h2>
              <p>Exploring lo-fi aesthetics.</p>
            </div>
          </div>

          {/* Page 4 (Right side) */}
          <div className={styles.demoPage}>
            <img src={twinHead} alt="Content 2" className={styles.bookImg} />
          </div>
        </HTMLFlipBook>
      </section>
    </div>
  );
}

export default App;
