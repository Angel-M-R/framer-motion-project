import {motion, useInView} from "framer-motion";
import "./services.scss";
import { useRef } from "react";


const variants = {
  initial:{
    x:-500,
    y:100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    }
  }
}

const Services = () => {

  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div ref={ref} animate={isInView && "animate"} className='services' variants={variants} initial="initial">
      <motion.div variants={variants} className='textContainer'>
        <p>I focus on helping your brand grow<br/> and move forward</p>
        <hr/>
      </motion.div>
      <motion.div variants={variants} className='titleContainer'>
        <div className="title">
          <img src="/people.webp" alt=""/>
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business.</h1>
          <button>WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className='listContainer'>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quis, animi quas reprehenderit quidem eveniet dolor nam soluta, recusandae temporibus, eos et! Adipisci eveniet sequi fugiat impedit ipsum, repellendus omnis?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quis, animi quas reprehenderit quidem eveniet dolor nam soluta, recusandae temporibus, eos et! Adipisci eveniet sequi fugiat impedit ipsum, repellendus omnis?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quis, animi quas reprehenderit quidem eveniet dolor nam soluta, recusandae temporibus, eos et! Adipisci eveniet sequi fugiat impedit ipsum, repellendus omnis?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quis, animi quas reprehenderit quidem eveniet dolor nam soluta, recusandae temporibus, eos et! Adipisci eveniet sequi fugiat impedit ipsum, repellendus omnis?</p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services