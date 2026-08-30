import firstImage from '../assets/craiyon_133348_image.png'
import secondImage from '../assets/craiyon_133437_image.png'

function Home() {
  return (
    <>
      <div className="background-container"/>

      <div className="flex flex-col gap-2 absolute left-[27%] top-[47%] -translate-x-1/2 -translate-y-1/2 ">
          <p className="text text-8xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Alexander Ruiz</p>
          <p className="text text-6xl [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff44]">Web Dev/SWE</p>
          <p className="text text-6xl">Projects</p>
          <p className="text text-6xl">About Me</p>
          <p className="text text-6xl">Contact Me</p>
      </div>     

      <img src={firstImage} alt="description" className="image1" />
      <img src={secondImage} alt="description" className="image2" />
      <div className="half-circle" />
      <div id="vertical-line" />
    </>
  )
}

export default Home;