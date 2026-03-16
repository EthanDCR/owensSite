import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import KonaAnimation from "../assets/lotties/KONAEMBLEM.json"


const KonaLottie = ({ width = '300px', loop = true }) => {
  return (
    <div style={{ width }}>
      <DotLottieReact
        data={KonaAnimation} // Change 'src' to 'data'
        loop={loop}
        autoplay
      />
    </div>
  );
};

export default KonaLottie;
