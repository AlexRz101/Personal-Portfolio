import firstImage from '../assets/craiyon_133348_image.png'
import secondImage from '../assets/craiyon_133437_image.png'
import cityBg from '../assets/artapixel-city-5848267_1920.png'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import '../styles/App.css'

function Home() {
  return (
    <div 
      className="flex h-screen background-container overflow-hidden"
      style={{ '--bg-image': `url(${cityBg})` } as React.CSSProperties}
    >

      {/* Left Side */}
      <div className="flex flex-col justify-center items-start home-left">

        <h1 className="home-h1 leading-none whitespace-nowrap [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">
          Alexander Ruiz
        </h1>

        <h2 className="home-h2 leading-none whitespace-nowrap [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">
          Web Developer/SWE
        </h2>

        <Link to="/view-my-work" className="text glitch glitch-black home-link leading-none">
          View My Work
        </Link>

        <Link to="/about" className="text glitch glitch-black home-link leading-none">
          About Me
        </Link>

        <Link to="/contact" className="text glitch glitch-black home-link leading-none">
          Contact Me
        </Link>

        <div className="typewriter-container home-typewriter">
          <p className="text typewriter-line1">Wake up Samurai,</p>
          <p className="text typewriter-line2">we got a portfolio to look at.</p>
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