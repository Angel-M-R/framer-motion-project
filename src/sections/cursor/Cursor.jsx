import React, { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({x:e.clientX-25, y:e.clientY-25});
    }

    window.addEventListener("mousemove", mouseMove);
    return () =>{
      window.removeEventListener("mousemove", mouseMove);
    }
  })

  return (
    <motion.div className="cursor" animate={{x:position.x,y:position.y}}>.</motion.div>
  )
}

export default Cursor;