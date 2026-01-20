 import { jsPDF } from 'jspdf';
 import autoTable from 'jspdf-autotable';
 import qrCode from 'qrcode';
 
 var i = 1;
    const cliente = {
        cli: 'Transportes Mr Logistik S.A.C',
        Ruc: 20610314644,
        Direct: 'Av.Primavera Mz. H Lote. 106d A. V. Los Gramadales',
        fecha: '2024/02/23'
    }
    const valor0 = {
        cant: 10,
        envio: 'Madre de dios,Tahuamanu',
        coste: 150.00,
        costex: 50.00,
        tt: 200.00,
    };

    const valor1 = { ...valor0 }
    valor1.cant = 5;
    valor1.coste = 80.00;
    valor1.costex = 20.00;
    valor1.tt = 100.00;

    const valor2 = { ...valor1 }
    valor2.cant = 3;
    valor2.coste = 100.00;
    valor2.costex = 0.00;
    valor2.tt = 100.00;

    const valor3 = { ...valor2 }
    valor3.cant = 2;
    valor3.coste = 30.00;
    valor3.costex = 0.00;
    valor3.Direct="Av.Primavera Mz. H Lote. 106d A. V. los";
    valor3.tt = 30.00;


    var ttl = valor0.tt + valor1.tt + valor2.tt + valor3.tt;
    var igv = ttl * 0.18;
    var neto = ttl + igv;

    const link=`https://www.youtube.com/watch?v=wvKqPPz7MOk`;

export const PaymentReceiptPDF = () => {
        qrCode.toDataURL(`${link}`, function (err, url) {
            if (err) return console.error(err);
            
        const encabezado = [
            'Cant',
            'Descripción envio',
            'Costo envio',
            'Costo extra',
            'Valor Total'
        ];


        const cuerpo = [
            [`${valor0.cant}`,
            `${valor0.envio}`,
            `S/.${valor0.coste.toFixed(2)}`,
            `S/.${valor0.costex.toFixed(2)}`,
            `S/.${valor0.tt.toFixed(2)}`],

            [`${valor1.cant}`,
            `${valor1.envio}`,
            `S/.${valor1.coste.toFixed(2)}`,
            `S/.${valor1.costex.toFixed(2)}`,
            `S/.${valor1.tt.toFixed(2)}`
            ],

            [`${valor2.cant}`,
            `${valor2.envio}`,
            `S/.${valor2.coste.toFixed(2)}`,
            `S/.${valor2.costex.toFixed(2)}`,
            `S/.${valor2.tt.toFixed(2)}`
            ],

            [`${valor3.cant}`,
            `${valor3.envio}`,
            `S/.${valor3.coste.toFixed(2)}`,
            `S/.${valor3.costex.toFixed(2)}`,
            `S/.${valor3.tt.toFixed(2)}`
            ]

        ];

        const pie = [
            [{ content: '' },
            { content: 'IMPORTE' },
            { content: `S/.${ttl.toFixed(2)}` }

            ],
            ['',
                'IGV(18%)',
                `S/.${igv.toFixed(2)}`
            ],
            ['',
                'TOTAL',
                `S/.${neto.toFixed(2)}`
            ]
        ];

        // Calcular altura dinámica: base + (items * 0.5cm) + footer
        const baseHeight = 7; // Header + info cliente
        const itemHeight = 0.35;
        const footerHeight = 3;
        const calculatedHeight = baseHeight + (cuerpo.length * itemHeight) + footerHeight;
        
        const doc = new jsPDF({
            unit:'cm',
            format:[calculatedHeight, 6]
        });

        


        autoTable(doc, {
            startY: 5.0,
            margin: { left: 0.5, right: 0.3 },
            
            head: [encabezado],
            headStyles: {
                fillColor: [28, 65, 124],
                textColor: [255, 255, 255],
                fontSize: 4,
                cellPadding: 0.05,
            },
            styles: {
                halign: 'center',
                fontSize: 3.5,
                cellPadding: 0.05,
            },
            columnStyles: {
                0: { cellWidth: 0.5 },
                1: { cellWidth: 2.0 },
                2: { cellWidth: 0.8 },
                3: { cellWidth: 0.8 },
                4: { cellWidth: 0.8 }
            },
            body: cuerpo,
        });

        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 0.6,
            margin: { left: 0.5, right: 0.3 },
            body: pie,
            theme: "plain",
            styles: {
                halign: "right",
                fontSize: 4,
                cellPadding: 0.05,
                textColor: [28, 65, 124],
            },
            columnStyles: {
                0: { cellWidth: 3.3 },
                1: { cellWidth: 0.8, fontStyle: 'bold' },
                2: { cellWidth: 0.8, fontStyle: 'bold' }
            }
        });
        doc.setTextColor(28, 65, 124);
        doc.setFont("Arial");
        doc.setFontSize(7);
        
        // Título
        doc.text('Transportes Mr Logistik S.A.C', 1.5, 1);
        
        // // Información de empresa
        doc.setFontSize(5);
        doc.text(`Ruc: ${cliente.Ruc}`, 2.5, 1.5);
        doc.text(`Direccion: ${valor3.Direct}`, 1.2, 1.8);
        doc.text(`Gramadales`, 2.5, 2.1);
        doc.text(`Cotizacion`, 2.5, 2.4);
        doc.text(`Electronica`, 2.5, 2.7);
        doc.text(`No: A-000${i}`, 2.5, 3.0);
        //cliente
        doc.text(`Cliente: ${cliente.cli}`, 0.5, 3.6);
        doc.text(`Ruc: ${cliente.Ruc}`, 0.5, 3.9);
        doc.text(`Direccion: ${cliente.Direct}`, 0.5, 4.2);
        doc.text(`Fecha emisión: ${cliente.fecha}`, 0.5, 4.5);
        
        const finalY = doc.lastAutoTable.finalY;
        
        // Parte inferior - posicionado dinámicamente
        doc.text(`Consulta en: http://logistkmr.com`, 0.5, finalY + 0.5);
        doc.text(`Nuestra experiencia en logística garantiza`, 0.25, finalY + 0.7);
        doc.text(`que tus entregas sean eficientes y`, 0.6, finalY + 0.9);
        doc.text(`confiable.`, 1.3, finalY + 1.1);
        doc.text(`mrlogistik@hotmail.com`, 0.8, finalY + 1.5);
        doc.text(`(51) 976-037-013`, 1.0, finalY + 1.7);
        
        doc.addImage(url, 'PNG', 3.2, finalY + 0.3, 2.5, 2.5);
        
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
        // doc.save(`Reporte_${cliente.Ruc}`);
    });
}
