import "./navbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{opacity: 0, scale:0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          >
            Angel Moreno
        </motion.span>
        <div className="social">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
        </div>
      </div>
    </div>

  )
}

export default Navbar