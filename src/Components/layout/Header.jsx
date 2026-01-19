
export default function Navbar() {
  return (
    <div className='bg-gradient-to-r from-blue-900 to-blue-700 shadow-2xl'>
      <header className='py-8 px-10 border-b border-blue-500/30'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-xl'>ML</span>
          </div>
          <div>
            <h1 className='text-white text-3xl font-bold'>PLANTILLAS PDF</h1>
            <p className='text-blue-200 text-sm'>JSPDF-AUTOTABLE</p>
          </div>
        </div>
      </header>
      <nav className="py-4 px-10">
        <ul className='flex gap-6 text-white'>
          <li><a href="/" className='hover:text-blue-300 transition-colors'>Inicio</a></li>
          <li><a href="/cotizacion" className='hover:text-blue-300 transition-colors'>Cotización</a></li>
          <li><a href="/reportes" className='hover:text-blue-300 transition-colors'>Reportes</a></li>
        </ul>
      </nav>
    </div>
  )
}
