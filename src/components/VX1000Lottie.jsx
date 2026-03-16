import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Rename the import to 'animationData' to avoid a name collision with the component
import animationData from "../assets/lotties/VX1000.json";

const VX1000Animation = ({ width = '300px', loop = true }) => {
  return (
    <div style={{ width, margin: '0 auto' }}>
      <DotLottieReact
        data={animationData}
        loop={loop}
        autoplay={true}
        visibilitySensorConfig={{ threshold: [0.5] }}
      />
    </div>
  );
};

export default VX1000Animation;
