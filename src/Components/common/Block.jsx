

export default function Block({ label, description, color, component }) {
  return (
    <div 
      style={{ backgroundColor: color }}
      className="p-8 rounded-2xl border-2 border-white/10 flex flex-col items-center shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
    >
        <h1 className="text-white text-3xl font-bold mb-4 text-center">{label}</h1>
        <p className="text-white/80 text-base mb-6 text-center">{description}</p>
        {component}
    </div>
  )
}
