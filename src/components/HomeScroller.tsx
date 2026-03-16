import Marquee from "./Marquee";

const STATUS_DATA = [
  "STATUS: AVAILABLE FOR PROJECTS",
  "LOCATION: CAIRO, EG",
  "SPECIALIZATION: AGENTIC WORKFLOWS",
  "TECH STACK: GPT-4 + FLASK + N8N",
];

const StatusMarquee = () => {
  return (
    <div className="border-y border-brand-gray bg-transparent backdrop-blur-xs py-3">
      <Marquee duration={25} pauseOnHover={true}>
        {STATUS_DATA.map((status, idx) => (
          <span 
            key={idx} 
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/40 mx-12 flex items-center gap-4"
          >
            <span className="w-1 h-1 bg-brand-primary rounded-full animate-pulse" />
            {status}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default StatusMarquee;