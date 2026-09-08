type ImageCardProps = {
    projectName: string;
    image: string;
    description: string;
    url: string; 
    cardColor: string; //Main background color of the card
    textColor1: string; //Text color for project name and link
    textColor2: string; //Text color for description text
    shadowColor: string; //Shadow color for the card
    innerBorderColor: string; //Border color for the inner borders (project name and description)
    outerBorderColor: string; //Border color for the outer border of the card
    glitchColor: string; //Glitch effect color for the link text
};

function ImageCard({ 
    projectName, 
    image, 
    description, 
    url, 
    cardColor, 
    textColor1,
    textColor2,
    shadowColor,
    innerBorderColor,
    outerBorderColor,
    glitchColor
}: ImageCardProps) {

    return (
        <div className={`responsive-card min-h-[500px] shadow-md ${shadowColor} ${outerBorderColor} p-0.5`}>
            
            <div className={`flex flex-col items-center gap-2 h-full ${cardColor}`}>
                
                <img 
                    src={image} 
                    alt="Project" 
                    className="w-full"
                />

                <h2 className={`text w-full text-2xl font-bold bg-black ${textColor1} border-b-2 ${innerBorderColor} pb-2 text-center`}>
                    {projectName}
                </h2>

                <p className={`${textColor2} bg-black text-center w-full border-b-2 ${innerBorderColor} pb-2 px-2 flex-1 flex items-center justify-center`}>
                    {description}
                </p>

                <a 
                    href={url} 
                    className={`text ${textColor1} bg-black hover:underline glitch ${glitchColor} mb-2`}
                >
                    View Project
                </a>

            </div>
        </div>
    )
}

export default ImageCard;