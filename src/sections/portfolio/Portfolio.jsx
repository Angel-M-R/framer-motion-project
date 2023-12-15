import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id:1,
    title:"React Commerce",
    img: "https://images.pexels.com/photos/4558710/pexels-photo-4558710.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam recusandae excepturi ea reprehenderit autem dolorum provident nihil placeat, culpa, sit quisquam id quas eius, iusto doloremque voluptatum iure ut consectetur!"
  },
  {
    id:2,
    title:"Next.js Commerce",
    img: "https://images.pexels.com/photos/16689312/pexels-photo-16689312/free-photo-of-madera-iphone-oscuro-ordenador-portatil.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam recusandae excepturi ea reprehenderit autem dolorum provident nihil placeat, culpa, sit quisquam id quas eius, iusto doloremque voluptatum iure ut consectetur!"
  },
  {
    id:3,
    title:"Vanilla JS App",
    img: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam recusandae excepturi ea reprehenderit autem dolorum provident nihil placeat, culpa, sit quisquam id quas eius, iusto doloremque voluptatum iure ut consectetur!"
  },
  {
    id:4,
    title:"Weather App",
    img: "https://images.pexels.com/photos/7015029/pexels-photo-7015029.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam recusandae excepturi ea reprehenderit autem dolorum provident nihil placeat, culpa, sit quisquam id quas eius, iusto doloremque voluptatum iure ut consectetur!"
  }
];

const Single = (({item}) =>{
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0,1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 15,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio