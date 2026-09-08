import Card from "../components/ImageCard";
import Navbar from "../components/Navbar";
import coinverseImage from "../assets/Screenshot 2026-09-04 105655.png";
import road2csImage from "../assets/Screenshot 2026-09-04 110637.png";
import skillSynthImage from "../assets/Screenshot 2025-10-18 121207.png";

function Projects() {
    return (
        <div className="h-screen bg-[#1a1a1a]">

            {/* Navbar */}
            <div className="flex justify-center items-center py-4">
                <Navbar navBarColor="bg-[#f2e900]" textColor="text-black" shadowColor="shadow-[#f2e900]" />
            </div>

            {/* Main Card Content */}
            <div className="flex flex-col justify-center items-center mt-16 gap-2">

                <h1 className="text text-4xl text-[#f2e900]">Projects</h1>
                <div className="flex flex-row gap-4">
                    <Card projectName="Coinverse" image={coinverseImage} description="A full-stack currency converter supporting both real and fictional currencies. 
                    Built solo with React on the frontend and Spring Boot + PostgreSQL on the backend. Features user auth with JWT, conversion history and email verification."
                        url="https://coinverse-exchange.vercel.app/" cardColor="bg-[#f2e900]" textColor="text-[#1a1a1a]"/>

                    <Card projectName="Skill Synth" image={skillSynthImage} description="A full-stack hackathon MVP powered by 
                        Machine Learning that analyzes your current skills and goals to generate a personalized learning curriculumn. 
                        Contains an RPG level based system to pair with other users and learn together. Awarded 2nd place."
                        url="https://github.com/AlexRz101/SkillSynth" cardColor="bg-[#f2e900]" textColor="text-[#1a1a1a]"/>

                    <Card projectName="Road2CS" image={road2csImage} description="A full-stack degree roadmap tool for CSUN CS students. 
                        Built with React (frontend) and Spring Boot (backend). Lets students map out their semesters, swap GE courses and supports multiple schedule templates." 
                        url="https://road2cs.vercel.app/" cardColor="bg-[#f2e900]" textColor="text-[#1a1a1a]"/>
                </div>

            </div>
        </div>
    );
}

export default Projects;