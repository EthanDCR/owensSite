import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import KonaAnimation2 from "../assets/lotties/KONA (1).json";

const Kona2Lottie = ({ loop = true }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DotLottieReact
        data={KonaAnimation2}
        loop={loop}
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Kona2Lottie;
