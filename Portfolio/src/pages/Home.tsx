import firstImage from '../assets/craiyon_133348_image.png'
import secondImage from '../assets/craiyon_133437_image.png'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import '../styles/App.css'

function Home() {
  return (
    <div className="flex h-screen background-container overflow-hidden">

      {/* Left Side */}
      <div className="flex flex-col justify-center items-start gap-[clamp(0.25rem,0.4vw,0.75rem)] z-1 pl-[clamp(2rem,8vw,12rem)]">

        <h1 className="text-[clamp(4rem,5.5vw,9rem)] leading-none whitespace-nowrap [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">
          Alexander Ruiz
        </h1>

        <h2 className="text-[clamp(2.5rem,3.8vw,6rem)] leading-none whitespace-nowrap [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">
          Web Developer/SWE
        </h2>

        <Link
          to="/view-my-work"
          className="text glitch glitch-black text-[clamp(2.5rem,3.5vw,5rem)] leading-none"
        >
          View My Work
        </Link>

        <Link
          to="/about"
          className="text glitch glitch-black text-[clamp(2.5rem,3.5vw,5rem)] leading-none"
        >
          About Me
        </Link>

        <Link
          to="/contact"
          className="text glitch glitch-black text-[clamp(2.5rem,3.5vw,5rem)] leading-none"
        >
          Contact Me
        </Link>

        <div className="typewriter-container mt-[clamp(0.5rem,1vw,1.5rem)]">
          <p className="text text-[clamp(1rem,1.5vw,3rem)] typewriter-line1">
            Wake up Samurai,
          </p>

          <p className="text text-[clamp(1rem,1.5vw,3rem)] typewriter-line2">
            we got a portfolio to look at.
          </p>
        </div>

      </div>
 
      {/* Vertical Line */}
      <div id="vertical-line" />
      
      {/* Right Side */}
      <div className="flex items-center justify-end w-1/2">
        <img src={firstImage} alt="description" className="image1" />
        <img src={secondImage} alt="description" className="image2" />
        <div className="half-circle" />
      </div>
    </div>
  )
}

export default Home;