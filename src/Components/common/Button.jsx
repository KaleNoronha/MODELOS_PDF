import { Play } from 'lucide-react';

export default function Button({ onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
    >
       <span>Generar PDF</span>
       <Play size={20} fill="white" />
    </button>
  )
}
