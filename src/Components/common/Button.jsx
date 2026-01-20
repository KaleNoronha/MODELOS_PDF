import { Play } from 'lucide-react';

export default function Button({ onClick , color}) {
  return (
    <button 
      onClick={onClick} 
      style={{borderColor:color}}
      className={`border-2  px-8 py-4 rounded-xl text-white font-semibold shadow-lg 
        hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105`}
    >
       <span>Generar PDF</span>
       <Play size={20} fill="white" />
    </button>
  )
}
