import Card from "../components/ImageCard";

function Projects() {
    return (
        <div className="h-screen flex justify-center items-center flex-col bg-[#1a1a1a]">
            <h1 className="text text-[#f2e900]">Projects</h1>
            <div className="flex flex-row gap-4">
                <Card projectName="Coinverse" content="This is a sample project card." description="This project showcases my skills in web development."
                    url="https://coinverse-exchange.vercel.app/"/>

                <Card projectName="Road2CS" content="This is a sample project card." description="This project showcases my skills in web development."
                    url="https://road2cs.vercel.app/"/>

                <Card projectName="Skill Synth" content="This is a sample project card." description="This project showcases my skills in web development." 
                    url="https://github.com/AlexRz101/SkillSynth"/>
            </div>
        </div>
    );
}

export default Projects;