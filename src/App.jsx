import Lottie from "lottie-react";
import styles from "../src/app.module.css";
import owenAllen from "../src/assets/OWENALLEN.svg";
import BubbleMenu from "./components/BubbleMenu";
import kavoslogo from "../src/assets/KAVOSSIGNAGEIPHONE.png";
import rustyRida from "../src/assets/video/RUSTYRIDER_TEST.mp4";
import twinHead from "../src/assets/TwinHeadMockup.png";
import HTMLFlipBook from 'react-pageflip';
//import peter from "../src/assets/petaaa.png";
//import amp from "../src/assets/video/amp.mp4";
import Kona2Lottie from "./components/Kona2Lottie";
import VX1000Animation from "./components/VX1000Lottie";
import ProductDemo from "../src/assets/video/productDemo.mp4"
import hopeIsPunk from "../src/assets/video/hopeIsPunk.mp4"
import basementShow from "../src/assets/video/basementShow.mp4"
import scooter from "../src/assets/video/SCootaAssembeGlow.mp4"



import p1 from "../src/assets/BookPages/PAGESFORSite.png";
import p2 from "../src/assets/BookPages/PAGESFORSite2.png";
import p3 from "../src/assets/BookPages/PAGESFORSite3.png";
import p4 from "../src/assets/BookPages/PAGESFORSite4.png";
import p6 from "../src/assets/BookPages/PAGESFORSite6.png";
import p7 from "../src/assets/BookPages/PAGESFORSite7.png";
import p8 from "../src/assets/BookPages/PAGESFORSite8.png";

function App() {
  const bookPages = [p1, p2, p3, p4, p6, p7, p8];

  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <BubbleMenu logo={owenAllen} />
        <div className={styles.heroContent}>
          <img className={styles.owenAllenHero} src={owenAllen} alt="Owen Allen" />
          <div className={styles.vx1000HeroWrapper}>
            <VX1000Animation width="900px" />
          </div>
        </div>
      </header>

      <section className={styles.portfolioGrid}>

        {/* Kona Farms */}
        <div className={`${styles.gridCell} ${styles.konaPair}`}>
          <Kona2Lottie />
        </div>

        {/* Kavos */}
        <div className={styles.gridCell}>
          <img src={kavoslogo} alt="Kavos" className={styles.gridMedia} />
        </div>

        {/* Rusty Rider — wide */}
        <div className={`${styles.gridCell} ${styles.cellWide}`}>
          <video src={rustyRida} autoPlay loop muted playsInline className={styles.gridMedia} />
        </div>

        {/* Twin Head Mockup */}
        <div className={styles.gridCell}>
          <video src={ProductDemo} autoPlay loop muted playsInline className={styles.gridMedia} />
        </div>

        {/* Bottom row: Hope Is Punk, Basement Show, Scooter */}
        <div className={styles.gridCell}>
          <video src={hopeIsPunk} autoPlay loop muted playsInline className={styles.gridMedia} />
        </div>
        <div className={styles.gridCell}>
          <video src={basementShow} autoPlay loop muted playsInline className={styles.gridMedia} />
        </div>
        <div className={styles.gridCell}>
          <video src={scooter} autoPlay loop muted playsInline className={styles.gridMedia} />
        </div>

      </section>


      <section className={styles.section5}>
        <HTMLFlipBook
          width={400}
          height={553}
          size="stretch"
          minWidth={150}
          maxWidth={800}
          minHeight={553}
          maxHeight={553}
          showCover={false}
          usePortrait={false}
          startPage={0}
          autoSize={true}
          showOnlyTablet={false}
          className={styles.flipBook}
        >
          {bookPages.map((image, index) => (
            <div key={index} className={styles.demoPage}>
              <img
                src={image}
                alt={`Page ${index + 1}`}
                className={styles.bookImg}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </section>
    </div>
  );
}

export default App;
