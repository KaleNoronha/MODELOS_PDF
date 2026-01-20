import {Block,Button} from '../common';
import {generatePaymentReceiptPDF,generateQuotationPDF,
  generateDeliveryStickerPDF,generateShippingLabelPDF
} from '../../utils';

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
              <Button  onClick={generateQuotationPDF} color="#1e40af" />
            }
          />
          <Block 
            label="Boleta PDF"
            color="#059669"
            description="Genera una boleta en formato PDF creciente segun cantidad de productos"
            component={
              <Button onClick={generatePaymentReceiptPDF} 
              color="#059669"
              />
            }
          />
          <Block 
            label="Sticker de Entrega PDF"
            color="#7c3aed"
            description="Crea stickers de entrega personalizados en formato PDF"
            component={
              <Button onClick={generateDeliveryStickerPDF}
              color="#7c3aed"
              />
            }
          />
          <Block 
            label="Etiqueta de Envío PDF"
            color="#d97706"
            description="Crea etiquetas de envío profesionales en formato PDF"
            component={
              <Button onClick={generateShippingLabelPDF} 
              color="#d97706"
              />
            }
          />
        </div>
      </div>
    </main>
  )
}
