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
          width={300}
          height={500}
          size="stretch"
          minWidth={150}
          maxWidth={400}
          minHeight={250}
          maxHeight={600}
          showCover={true}
          mobileScrollSupport={true}
        >
          {/* Page 1 (Cover) */}
          <div className={styles.demoPage}>
            <img width="100%" height="100%" src={kavoslogo} alt="Cover" style={{ objectFit: 'cover' }} />
          </div>
          {/* Page 2 */}
          <div className={styles.demoPage}>
            <div style={{ padding: '20px' }}>
              <h2>Page 2</h2>
              <img width="100%" height="100%" src={twinHead} alt="Cover" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          {/* Page 3 */}
          <div className={styles.demoPage}>
            <div style={{ padding: '20px' }}>
              <h2>Page 3</h2>
              <p>More content.</p>
            </div>
          </div>
          {/* Page 4 (Back Cover) */}
          <div className={styles.demoPage}>
            <div style={{ padding: '20px' }}>
              <h2>The End</h2>
            </div>
          </div>
        </HTMLFlipBook>
      </section>
    </div>
  );
}

export default App;
