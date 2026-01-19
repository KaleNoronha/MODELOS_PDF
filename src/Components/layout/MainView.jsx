import {Block,Button} from '../common';
import {printPDF} from '../../utils/quatationPDF';

export default function MainView() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-8xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Block 
            label="Cotización PDF"
            color="#1e40af"
            description="Genera una cotizacion en formato PDF de manera rapida y sencilla"
            component={
              <Button  onClick={printPDF} />
            }
          />
          <Block 
            label="Boleta PDF"
            color="#059669"
            description="Genera una boleta en formato PDF creciente segun cantidad de productos"
            component={
              <Button onClick={printPDF} />
            }
          />
          <Block 
            label="Reporte PDF"
            color="#7c3aed"
            description="Exporta reportes completos de operaciones"
            component={
              <Button onClick={printPDF} />
            }
          />
        </div>
      </div>
    </main>
  )
}
