import { useProgress, Html } from "@react-three/drei";
import { MouseEventHandler } from "react";

const LoadingScreen = ({ onStart }: {onStart: MouseEventHandler<HTMLButtonElement> }) => {
  const { progress } = useProgress();

  return (
    <Html className='fixed w-full h-full left-0 top-0 bg-green-700 z-[-1]'>
      <div className=''>
        Loading {progress}
      </div>
    </Html>
    )
  }

export default LoadingScreen