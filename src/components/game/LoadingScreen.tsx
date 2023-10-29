import { useProgress, Html } from "@react-three/drei";
import { MouseEventHandler } from "react";

const LoadingScreen = ({ onStart }: {onStart: MouseEventHandler<HTMLButtonElement> }) => {
  const { progress } = useProgress();

  return (
    <Html className='fixed w-full h-full left-0 top-0 bg-green-700 z-[-1]'>
      <div className='bottom-0 left-0'>
          <svg width='100%' height='65px'>
            <g className='bars'>
              <rect width={progress} height='25'></rect>
            </g>
          </svg>
          <div>
          Loading {progress}
          </div>
      </div>
    </Html>
    )
  }

export default LoadingScreen