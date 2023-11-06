import { useProgress, Html } from "@react-three/drei"

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className='bottom-0 left-0'>
          <svg width='100%' height='65px'>
            <g className='bars'>
              <rect width={progress} height='25'></rect>
            </g>
          </svg>
          <div className="w-full flex flex-col">
            <span className="w-full">Loading: {progress}</span>
          </div>
      </div>
    </Html>
    )
  }

export default LoadingScreen