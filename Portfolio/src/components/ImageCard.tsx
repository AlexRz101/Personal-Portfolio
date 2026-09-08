function ImageCard({ projectName, image, description, url, cardColor, textColor} : 
    { projectName: string, image: string, description: string, url: string, cardColor: string, textColor: string }) {
    return (
        <div className={`w-120 h-120 ${cardColor} shadow-md`}>
            <div className="flex flex-col items-center gap-2 h-full p-0.5">
                <img src={image} alt="Project" className="text-center" />
                <h2 className={`text w-full text-2xl font-bold ${textColor} border-b-2 pb-2 text-center`}>{projectName}</h2>
                <p className={`${textColor} text-center w-full border-b-2 pb-2 flex-1 flex items-center justify-center`}>{description}</p>
                <a href={url} className={`text ${textColor} hover:underline glitch`}>View Project</a>
            </div>
        </div>
    )
}

export default ImageCard;