import firstImage from '../assets/craiyon_133348_image.png'
import secondImage from '../assets/craiyon_133437_image.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="background-container"/>

      <div className="flex flex-col gap-2 absolute left-[27%] top-[47%] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Alexander Ruiz</h1>
          <h2 className="text-6xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Web Developer/SWE</h2>
          
          <Link to="/view-my-work" className="text text-6xl glitch">View My Work</Link>
          <Link to="/about" className="text text-6xl glitch">About Me</Link>
          <Link to="/contact" className="text text-6xl glitch">Contact Me</Link>
      </div>     

      <img src={firstImage} alt="description" className="image1" />
      <img src={secondImage} alt="description" className="image2" />
      <div className="half-circle" />
      <div id="vertical-line" />
    </>
  )
}

export default Home;