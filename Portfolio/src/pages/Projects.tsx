function Projects() {
    return (
        <div className="h-screen flex justify-center items-center flex-col bg-[#1a1a1a]">
            <h1 className="text text-[#f2e900]">Projects</h1>
            <p className="text-white">Welcome to my projects page!</p>
            <a href="https://road2cs.vercel.app/" className="text text-[#f2e900] hover:underline"> Road2CS </a>
            <a href="https://coinverse-exchange.vercel.app/" className="text text-[#f2e900] hover:underline"> Coinverse </a>
            <a href="https://github.com/AlexRz101/SkillSynth" className="text text-[#f2e900] hover:underline"> SkillSynth </a>
        </div>
    );
}

export default Projects;