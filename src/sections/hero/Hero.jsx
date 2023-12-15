import "./hero.scss";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 10,
  },
  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 10,
    }
  },
}

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <h2>ANGEL MORENO</h2>
          <h1 >Front-end developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
        </motion.div>
      </div> 
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        Front-end Developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt=""/>
      </div>
    </div>
  )
}

export default Hero