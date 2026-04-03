import { useState } from "react";
import { Reveal } from "../components/animations/Reveal";
import NeuralMesh from "../components/NeuralMesh";
import { Mail, Linkedin, FileText, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/seif-abdelaty-183318229/", label: "CONNECT" },
    { name: "Download CV", icon: <FileText size={20} />, href: "https://seif-abdelaity-cv.tiiny.site/", label: "EXTRACT_PDF" },
    { name: "Email Me", icon: <Mail size={20} />, href: "mailto:seifeldeen2011@gmail.com", label: "SEND_SIGNAL" },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xykbndnq", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch  {
      setStatus("ERROR");
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-40 pb-20 px-6 md:px-20 overflow-hidden">
      <NeuralMesh />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        <div className="lg:col-span-5">
          <Reveal>
            <h1 className="text-7xl md:text-8xl font-lora font-bold italic leading-none mb-12">
              Initiate <br /> <span className="text-brand-primary">Contact.</span>
            </h1>
            <p className="text-xl font-light text-brand-gray mb-16 leading-relaxed">
              System is currently operational and accepting new inquiries regarding Agentic Workflows and RAG Architectures.
            </p>
          </Reveal>

          <div className="space-y-6">
            {socialLinks.map((link, i) => (
              <Reveal key={link.name} delay={i * 0.1}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-6 border border-white/5 bg-white/2 hover:border-brand-primary/50 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-white/30 mb-1">{link.label}</p>
                      <p className="font-lora italic text-xl">{link.name}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.3}>
            <div className="relative p-8 md:p-12 border border-white/10 bg-white/1 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent opacity-50" />
              
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-brand-primary tracking-widest uppercase">01 // IDENTITY</label>
                    <input 
                      type="text" 
                      placeholder="NAME_OR_ORG" 
                      name="name"
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none font-mono text-sm transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-brand-primary tracking-widest uppercase">02 // EMAIL_ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL_ADDRESS" 
                      name="email"
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none font-mono text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-brand-primary tracking-widest uppercase">03 // MESSAGE_PAYLOAD</label>
                  <textarea 
                    rows={4}
                    placeholder="DESCRIBE_THE_MISSION..." 
                    name="message"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none font-mono text-sm transition-colors resize-none"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "SENDING"}
                  className="group relative w-full py-6 border border-brand-primary text-brand-primary font-mono text-sm tracking-[0.3em] overflow-hidden hover:text-black transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10">
                    {status === "IDLE" && "EXECUTE_SIGNAL_SEND"}
                    {status === "SENDING" && "TRANSMITTING..."}
                    {status === "SUCCESS" && "SIGNAL_RECEIVED_OK"}
                    {status === "ERROR" && "RETRY_UPLINK"}
                  </span>
                </button>
              </form>

              <div className="mt-8 flex justify-between font-mono text-[8px] text-white/20">
                <span>ENCRYPTION: AES-256_ACTIVE</span>
                <span>STATUS: {status === "IDLE" ? "READY_FOR_UPLINK" : status}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;