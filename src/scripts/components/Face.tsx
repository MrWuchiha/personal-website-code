import React from "react";
import { useEffect, useState } from "react";

export default function Face() {
  let imgSrc = './src/assets/img7-face.png';
  const [x, setX] = useState({});

  useEffect(
    () => {
      const update = (e:any) => {
        setX(e.x);
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)

      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    }, [setX]
  ) 


  return (
    <>
      <img 
        className='face-bg' 
        src={x >= innerWidth/2 ? './src/assets/img8-face-sketch.png' : './src/assets/img7-face.png'}
      />
    </>
  )
}