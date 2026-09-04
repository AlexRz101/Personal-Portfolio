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
            <div className="flex justify-center items-center flex-col mt-16">

                <h1 className="text text-[#f2e900]">Projects</h1>
                <div className="flex flex-row gap-4">
                    <Card projectName="Coinverse" image={coinverseImage} description="This project showcases my skills in web development."
                        url="https://coinverse-exchange.vercel.app/"/>

                    <Card projectName="Road2CS" image={road2csImage} description="This project showcases my skills in web development."
                        url="https://road2cs.vercel.app/"/>

                    <Card projectName="Skill Synth" image={skillSynthImage} description="This project showcases my skills in web development." 
                        url="https://github.com/AlexRz101/SkillSynth"/>
                </div>
                
            </div>
        </div>
    );
}

export default Projects;