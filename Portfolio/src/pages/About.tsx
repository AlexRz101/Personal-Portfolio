import Navbar from "../components/Navbar";
import "../styles/About.css";
import '../styles/App.css';
import cityBg from '../assets/artapixel-city-5848267_1920.png';
import rightImage from '../assets/craiyon_124018_image.png';
import leftImage from  '../assets/craiyon_123905_image.png';

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
            <div className="flex flex-col items-center justify-center text-center h-[70%] max-w-2xl mx-auto text-left">
                <div className="bg-black rounded-[50%] px-30 py-34 flex flex-col items-center gap-3">
                    <h1 className="text text-[#f2e900]">About Me</h1>
                    <h2 className="text text-[#f2e900]">Welcome to my about page!</h2>
                    <p className="about-content text-white">My name is Alexander Ruiz and I am a passionate Web Developer/Software Engineer.
                        I have experience in building web applications using modern technologies such as React, Spring Boot and PostgreSQL.
                        I enjoy solving complex problems and creating efficient solutions.
                        In my free time, I like to explore new technologies and work on personal projects to enhance my skills.</p>
                </div>
            </div>

            <img src={leftImage} alt="description" className="leftImage" />
            <img src={rightImage} alt="description" className="rightImage" />
            <div className="rightCircle"></div>
        </div>
    );
}

export default About;
