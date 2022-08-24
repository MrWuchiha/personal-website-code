import { animated, useSpring } from "react-spring"
import { useDrag } from "@use-gesture/react";
import { useState } from "react";


const Tile = ({ children, basis, color}: {children: any, basis:string, color:string}) => {
  const [{x, y}, api] = useSpring(() => ({
    config: {
      friction:10,
    },
    x: 0, 
    y: 0,
  }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  });
  
  return (
    <animated.div {...bind()} className={`${basis} ${color} tile`} style={{x, y}}>
      {children}
    </animated.div>
  )
};

export default Tile;