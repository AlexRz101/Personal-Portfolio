import firstImage from '../assets/craiyon_133348_image.png'
import secondImage from '../assets/craiyon_133437_image.png'
import { Link } from 'react-router-dom'
import '../Home.css'
import '../App.css'

function Home() {
  return (
    <div className="flex h-screen background-container">
      <div className="flex flex-col justify-center items-start gap-2 z-1 pl-[clamp(1rem,20vw,100px)]">
        <h1 className="text-8xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Alexander Ruiz</h1>
        <h2 className="text-6xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Web Developer/SWE</h2>
        
        <Link to="/view-my-work" className="text text-6xl glitch">View My Work</Link>
        <Link to="/about" className="text text-6xl glitch">About Me</Link>
        <Link to="/contact" className="text text-6xl glitch">Contact Me</Link>

        <div className="typewriter-container">
          <p className="text text-2xl typewriter-line1">Wake up Samurai,</p>
          <p className="text text-2xl typewriter-line2">we got a portfolio to look at.</p>
        </div>
      </div>     

      <div className="flex items-center justify-end w-1/2">
        <img src={firstImage} alt="description" className="image1" />
        <img src={secondImage} alt="description" className="image2" />
        <div className="half-circle" />
        <div id="vertical-line" />
      </div>
    </div>
  )
}

export default Home;