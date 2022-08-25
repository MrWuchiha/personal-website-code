import { animated, useSpring } from "react-spring"
import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import React from "react";


const TileTwo = ({ front, back, color}: {front: any, back:any, color:string}) => {
  const [flipped, setFlipped] = useState(false);
  
  const [{x, y}, api] = useSpring(() => ({
    x: 0, 
    y: 0,
    config: {friction: 10}
  }));
  const {opacity, transform} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  });
  
  return (
    <div className={'project-tile-container'} onClick={() => setFlipped(state => !state)}>
      <animated.div
        {...bind()}
        className={`${color} tile-two`}
        style={{ 
          opacity: flipped ? opacity : opacity.to(o => 1 - o), 
          rotateY: flipped ? '180deg' : '0deg',
          transform, 
          x, y }}
      >
        {flipped ? back : front}
      </animated.div>
    </div>
  )
};

export default TileTwo;