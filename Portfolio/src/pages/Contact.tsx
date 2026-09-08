function Contact() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#1a1a1a] gap-2">
            <h1 className="text text-[#f2e900]">Contact</h1>
            <p className="text-white">Welcome to my contact page!</p>
            <p className="text-white">You can reach me at:<br></br>
                <a href="mailto:prestigealexx@gmail.com" className="text text-[#f2e900] hover:underline">prestigealexx@gmail.com</a>
            </p>
        </div>
    );
}

export default Contact;