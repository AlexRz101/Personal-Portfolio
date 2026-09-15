import Navbar from "../components/Navbar"
import "../styles/About.css"
import cityBg from '../assets/artapixel-city-5848267_1920.png'
import rightImage from '../assets/craiyon_124018_image.png'
import leftImage from  '../assets/craiyon_123905_image.png'

function About() {
    return (
        <div 
            className="h-screen background-container overflow-hidden"
            style={{ '--bg-image': `url(${cityBg})` } as React.CSSProperties}
        >
            {/* Navbar centered at top */}
            <div className="flex justify-center items-start py-8 w-full">
                <Navbar 
                    navBarColor="bg-black"
                    textColor="text-[#f2e900]"
                    shadowColor="shadow-[#f2e900]"
                />
            </div>

            {/* Page content below */}
            <div className="h-[70%] flex flex-col items-center justify-center text-center">
                <h1 className="text">About Me</h1>
                <p>Welcome to my about page!</p>
                <p className="about-content center">My name is Alexander Ruiz and I am a passionate Web Developer/Software Engineer. <br></br>
                    I have experience in building web applications using modern technologies such as React, Spring Boot and PostgreSQL. <br></br> 
                    I enjoy solving complex problems and creating efficient solutions. <br></br>
                    In my free time, I like to explore new technologies and work on personal projects to enhance my skills.</p>
            </div>

            <img src={leftImage} alt="description" className="leftImage" />
            <img src={rightImage} alt="description" className="rightImage" />
            <div className="rightCircle"></div>
        </div>
    );
}

export default About;
