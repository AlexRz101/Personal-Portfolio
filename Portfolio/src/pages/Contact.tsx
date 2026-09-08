import Navbar from "../components/Navbar";

function Contact() {
    return (
        <div className="h-screen bg-[#1a1a1a]">

            {/* Navbar */}
            <div className="flex justify-center items-center py-4">
                <Navbar navBarColor="bg-[#f2e900]" textColor="text-black" shadowColor="shadow-[#f2e900]" />
            </div>

            <div className="h-screen flex flex-col justify-center items-center bg-[#1a1a1a] gap-2">
                <h1 className="text text-[#f2e900]">Contact</h1>
                <p className="text-white">Welcome to my contact page!</p>
                <p className="text-white">You can reach me at:<br></br>
                    <a href="mailto:prestigealexx@gmail.com" className="text text-[#f2e900] hover:underline">prestigealexx@gmail.com</a> <br></br>
                    <a href="https://www.linkedin.com/in/alexander-r-6b620a210/" className="text text-[#f2e900] hover:underline">LinkedIn</a> <br></br>
                    <a href="https://github.com/AlexRz101" className="text text-[#f2e900] hover:underline">GitHub</a>
                </p>
            </div>
        </div>
    );
}

export default Contact;