function Card({ projectName, content, description, url } : 
    { projectName: string, content: string, description: string, url: string }) {
    return (
        <div className="w-60 h-60 bg-[#535050] rounded-lg shadow-md">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text text-2xl font-bold text-white">{projectName}</h2>
                <img src={content} alt="Project" className="text-white text-center" />
                <p className="text-white text-center">{description}</p>
                <a href={url} className="text text-[#f2e900] hover:underline">View Project</a>
            </div>
        </div>
    )
}
             
export default Card;