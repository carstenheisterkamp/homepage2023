// import { usePointerPosition } from "../stores/uiStore"
import { useEffect, useRef, useState } from "react";

export const CanvasComponent = () => {
    // const pointerPosition = usePointerPosition()
    const canvasRef = useRef(null);
    const clickPosition = useState({
        
    })

    const handleCanvasClick = (e: { clientX: number, clientY: number }) => {
        clickPosition = { x: e.clientX, y: e.clientY }
    }
    

    useEffect(() => {
        const canvas: HTMLCanvasElement | null  = canvasRef.current 
        const ctx = canvas!.getContext('2d')
        ctx!.clearRect(0, 0, window.innerHeight, window.innerWidth)
      });
    
      return (
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      );
}


