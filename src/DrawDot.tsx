import { log } from 'console';
import React, { ReactElement, useState } from 'react'

const DrawDot = () => {
    /**
     * Draw a dot on mouse click
     */
    const [dots, setDots] = useState<any>([]);

    const getCoordinates = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX;
        const y =  e.clientY;
        const newDot = {x, y};
        setDots([...dots, newDot]);
    }
  return (
    <div className='dot-container' onClick={(e) => getCoordinates(e)}>
        DrawDot
        {dots.map((dot: any, index: number) => (

            <div
            key={index}
             className='dot'
             style={{left: dot.x, top: dot.y}}
             >

             </div>
        )
        )}
    </div>
  )
}

export default DrawDot;