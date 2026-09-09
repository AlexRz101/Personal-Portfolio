import Navbar from "../components/Navbar"
import "../styles/About.css"
import cityBg from '../assets/artapixel-city-5848267_1920.png'
function About() {
    return (
        <div 
            className="flex flex-col h-screen background-container overflow-hidden"
            style={{ '--bg-image': `url(${cityBg})` } as React.CSSProperties}
        >
            {/* Navbar centered at top */}
            <div className="flex justify-center items-center py-4 z-10 w-full">
                <Navbar 
                    navBarColor="bg-black"
                    textColor="text-[#f2e900]"
                    shadowColor="shadow-[#f2e900]"
                />
            </div>

            {/* Page content below */}
            <div className="flex justify-center items-center flex-col text-center mt-10 gap-6 z-10">
                <h1 className="text">About Me</h1>
                <p>Welcome to my about page!</p>
                <p className="center">My name is Alexander Ruiz and I am a passionate Web Developer/Software Engineer. <br></br>
                    I have experience in building web applications using modern technologies such as React, Spring Boot and PostgreSQL. <br></br> 
                    I enjoy solving complex problems and creating efficient solutions. <br></br>
                    In my free time, I like to explore new technologies and work on personal projects to enhance my skills.</p>
            </div>
        </div>
    );
}

export default About;
