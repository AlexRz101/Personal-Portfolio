import Navbar from "../components/Navbar";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";
import '../styles/App.css';

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    display: "prestigealexx@gmail.com",
    href: "mailto:prestigealexx@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    display: "alexander-r-6b620a210",
    href: "https://www.linkedin.com/in/alexander-r-6b620a210/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    display: "AlexRz101",
    href: "https://github.com/AlexRz101",
  },
];

function Contact() {
  return (
    <div className="contact-page min-h-screen bg-[#1a1a1a]">

      <div className="responsive-navbar flex justify-center items-start py-8">
        <Navbar
          navBarColor="bg-[#f2e900]"
          textColor="text-black"
          shadowColor="shadow-[#f2e900]"
        />
      </div>

      <div className="flex flex-col items-center px-4 pt-10">

        <p className="text-xs font-medium tracking-widest text-[#f2e900] uppercase mb-3">
          Get in touch
        </p>

        <h1 className="text text-4xl font-medium text-white mb-3">
          Contact
        </h1>

        {/* Small divider */}
        <div className="w-10 h-0.5 bg-[#f2e900] rounded mb-6" />

        <p className="text-white text-sm text-center mb-10">
          Open to SWE internships and new opportunities.
          <br />
          Feel free to reach out through any of the channels below.
        </p>

        {/* Contact Card */}
        <div className="responsive-card flex flex-col bg-black border border-[#333] rounded-xl px-8 py-8 shadow-md shadow-[#f2e900]">

          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-4 py-3 border-b border-[#333] last:border-0"
            >
              <div className="responsive-contact-icon rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#f2e900] flex-shrink-0">
                {c.icon}
              </div>

              <div>
                <p className="text-xs text-white mb-0.5">
                  {c.label}
                </p>

                <a
                  href={c.href}
                   className="text-sm font-medium text-[#f2e900] hover:underline glitch glitch-yellow block w-full"
>
                  {c.display}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Contact;