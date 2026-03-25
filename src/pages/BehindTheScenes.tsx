import { Reveal } from "../components/animations/Reveal";
import NeuralMesh from "../components/NeuralMesh";

const BehindTheScenes = () => {
  return (
    <div className="relative min-h-screen bg-brand-black text-white pt-40 pb-20 px-6 md:px-20">
      <NeuralMesh />
      
      <div className="relative z-10">
        <Reveal>
          <div className="max-w-5xl mb-40">
            <span className="font-mono text-brand-primary text-xs tracking-[0.5em] mb-4 block uppercase">
              // POSITION: GENERATIVE_AI_ENGINEER
            </span>
            <h1 className="text-7xl md:text-9xl font-lora font-bold italic leading-[0.8] mb-12">
              Architecting <br /> <span className="text-brand-primary text-glow">Action.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-brand-gray max-w-3xl leading-relaxed">
              I build systems that go beyond conversation—integrating with tools and APIs to automate workflows and execute complex tasks.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-4">
            <div className="sticky top-40">
              <h2 className="font-mono text-sm text-brand-primary tracking-[0.4em] uppercase mb-8">01 / LOGIC_MODELS</h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                My approach to engineering is defined by five core protocols designed for production-grade reliability.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            {[
              { title: "ACT_NOT_RESPOND", desc: "I design agents to use tools and trigger workflows, turning conversations into real outcomes." },
              { title: "MULTI_AGENT_THINKING", desc: "Specialized agents collaborating and delegating tasks for scalable, maintainable systems." },
              { title: "END_TO_END_OWNERSHIP", desc: "Designing agent logic from initial idea to production-ready deployment." },
              { title: "AUTOMATION_FIRST", desc: "Utilizing n8n and Make to eliminate manual friction and build reliable system connections." },
              { title: "PRODUCTION_REALITY", desc: "Designing for failure—handling edge cases, retries, and unpredictable inputs." }
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group border-b border-white/5 pb-8 hover:border-brand-primary/50 transition-colors">
                  <h3 className="font-lora italic text-3xl mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <p className="text-brand-gray text-lg max-w-xl">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-40">
          <div className="flex items-center gap-8 mb-20">
            <h2 className="font-mono text-xs text-brand-primary tracking-[0.5em] shrink-0">SYSTEM_CAPABILITIES</h2>
            <div className="h-px grow bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { category: "AI_ENGINEERING", skills: "LangChain, CrewAI, RAG, Multi-Agent" },
              { category: "AUTOMATION", skills: "n8n, Make, Webhooks, Tool Calling" },
              { category: "VOICE_REALTIME", skills: "Whisper, ElevenLabs, WebSockets" },
              { category: "BACKEND", skills: "Python, FastAPI, Flask, REST APIs" },
              { category: "INFRASTRUCTURE", skills: "AWS, Docker, Linux, CI/CD" },
              { category: "DATA", skills: "Vector DBs, SQL, MongoDB, Embeddings" }
            ].map((item, i) => (
              <div key={i} className="bg-brand-black p-12 hover:bg-white/2 transition-colors">
                <span className="font-mono text-[10px] text-brand-primary mb-6 block tracking-widest">// {item.category}</span>
                <p className="font-lora italic text-xl text-white/80">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
           <h2 className="font-mono text-sm text-brand-primary tracking-[0.4em] uppercase mb-12">03 / UPTIME_HISTORY</h2>
           <Reveal>
             <div className="flex flex-col md:flex-row justify-between gap-4 border-l-2 border-brand-primary pl-8 py-2">
                <div>
                  <h3 className="text-3xl font-lora font-bold italic">Nanovate</h3>
                  <p className="text-brand-gray">Generative AI Engineer</p>
                </div>
                <div className="text-right font-mono text-xs text-brand-primary">
                  APRIL 2025 — PRESENT [ACTIVE]
                </div>
             </div>
           </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes;