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
                <div className="flex flex-col items-center gap-3 bg-black rounded-[50%] px-32 pt-10 pb-20">
                    <h1 className="text text-[#f2e900]">About Me</h1>
                    <h2 className="text text-white">CSUN Computer Science Student</h2>
                    <h3 className="text text-[#f2e900]">Open to work, choom</h3>
                    <p className="about-content text-white"> My name is Alexander Ruiz, a full-stack web developer and Computer Science student at CSUN. 
                        I build web applications using React, Spring Boot and PostgreSQL. <br /><br />
                        Outside of school I'm into video games, anime and fitness. 
                        I like finding ways to use those interests into my personal projects when I can. <br /><br /> 
                        Currently looking for SWE/Web developer work.

                    </p>
                </div>
            </div>

            <img src={leftImage} alt="description" className="leftImage" />
            <img src={rightImage} alt="description" className="rightImage" />
            <div className="rightCircle"></div>
        </div>
    );
}

export default About;
