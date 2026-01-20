# Generador de PDFs - Transportes Mr Logistik

Aplicación web moderna para generar documentos PDF personalizados para servicios de logística y transporte. Desarrollada con React y jsPDF, permite crear cotizaciones, boletas, stickers y etiquetas de envío de forma rápida y profesional.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Documentación de PDFs](#documentación-de-pdfs)
- [Personalización](#personalización)
- [Contribuir](#contribuir)

## ✨ Características

### Tipos de Documentos

- **Cotización PDF**: Genera cotizaciones profesionales con tablas dinámicas, cálculo automático de IGV y totales
- **Boleta de Pago PDF**: Crea boletas con altura dinámica que se ajusta según la cantidad de items
- **Sticker de Entrega PDF**: Genera stickers personalizados para marcar entregas con información clave
- **Etiqueta de Envío PDF**: Crea etiquetas profesionales con códigos de barras CODE128 y QR para tracking

### Funcionalidades Generales

- ✅ Generación de PDFs en tiempo real
- ✅ Vista previa en navegador
- ✅ Diseño responsive y moderno
- ✅ Códigos QR y de barras integrados
- ✅ Cálculos automáticos (IGV, totales)
- ✅ Altura dinámica según contenido
- ✅ Interfaz intuitiva con Tailwind CSS

## 🛠 Tecnologías

### Frontend
- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos

### Generación de PDFs
- **jsPDF** - Librería principal para crear PDFs
- **jspdf-autotable** - Plugin para tablas dinámicas
- **JsBarcode** - Generación de códigos de barras
- **QRCode** - Generación de códigos QR

### UI/UX
- **Lucide React** - Iconos modernos
- **Iconify** - Biblioteca de iconos adicionales

## 📦 Requisitos Previos

- Node.js >= 16.x
- npm >= 8.x o yarn >= 1.22.x

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/diseno-pdf.git
cd diseno-pdf
```

2. Instala las dependencias:
```bash
npm install
```

3. Coloca tus logos en la carpeta `/public/`:
```
public/
├── logo.png          # Logo principal
├── LogoMR.png        # Logo empresa
├── logo2.png         # Logo secundario
├── logo3.png         # Ícono adicional
└── logo4.png         # Ícono destino
```

## 💻 Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗 Build

Genera la versión de producción:
```bash
npm run build
```

Previsualiza el build:
```bash
npm run preview
```

## 📖 Uso

### Interfaz Principal

1. Al abrir la aplicación verás 4 bloques de colores, cada uno representa un tipo de PDF
2. Haz clic en el botón "Generar PDF" del documento que necesites
3. El PDF se abrirá automáticamente en una nueva pestaña del navegador
4. Desde ahí puedes descargarlo o imprimirlo

### Integración en tu Código

```javascript
import { generateQuotationPDF, generatePaymentReceiptPDF } from './utils';

// Generar cotización
const handleGenerateQuote = () => {
  generateQuotationPDF();
};

// Generar boleta
const handleGenerateReceipt = () => {
  generatePaymentReceiptPDF();
};
```

## 📁 Estructura del Proyecto

```
Diseño_PDF/
├── public/
│   ├── logo.png              # Logos e imágenes
│   └── ...
├── src/
│   ├── Components/
│   │   ├── common/
│   │   │   ├── Block.jsx     # Componente de tarjeta
│   │   │   ├── Button.jsx    # Botón reutilizable
│   │   │   └── index.js      # Barrel export
│   │   └── layout/
│   │       ├── Header.jsx    # Navbar principal
│   │       ├── MainView.jsx  # Vista principal con grid
│   │       └── layout.jsx    # Layout wrapper
│   ├── utils/
│   │   ├── quotationPDF.js          # Generador de cotizaciones
│   │   ├── paymentReceiptPDF.js     # Generador de boletas
│   │   ├── deliveryStickerPDF.js    # Generador de stickers
│   │   ├── shippingLabelPDF.js      # Generador de etiquetas
│   │   └── index.js                 # Barrel export
│   ├── App.jsx               # Componente raíz
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globales
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 📄 Documentación de PDFs

### 1. Cotización PDF (`quotationPDF.js`)

**Formato:** A4 (21 x 29.7 cm)

**Características:**
- Logo y encabezado de empresa
- Número de cotización automático (A-0001, A-0002...)
- Información del cliente (RUC/DNI, nombre, contacto, ciudad)
- Tabla de items con:
  - Cantidad
  - Destino de entrega
  - Peso y peso volumétrico
  - Costo de envío y extras
  - Total por item
- Cálculo automático de:
  - Importe subtotal
  - IGV (18%)
  - Total final
- Filas vacías para agregar más items manualmente

**Uso:**
```javascript
import { generateQuotationPDF } from './utils';
generateQuotationPDF();
```

### 2. Boleta de Pago PDF (`paymentReceiptPDF.js`)

**Formato:** Dinámico (altura variable × 6cm ancho)

**Características:**
- **Altura dinámica:** Se calcula automáticamente
  - Fórmula: `8cm + (0.5cm × número_de_items) + 3cm`
  - Ejemplo: 5 items = 8 + 2.5 + 3 = 13.5cm de altura
- Ancho fijo de 6cm (formato ticket)
- Información de empresa y cliente
- Tabla compacta con items
- Totales con IGV
- QR code para tracking
- Footer con datos de contacto

**Uso:**
```javascript
import { generatePaymentReceiptPDF } from './utils';
generatePaymentReceiptPDF();
```

### 3. Sticker de Entrega PDF (`deliveryStickerPDF.js`)

**Formato:** Personalizado

**Características:**
- Diseño compacto para stickers
- Información esencial del envío
- Código de tracking
- Espacio para firmas

**Uso:**
```javascript
import { generateDeliveryStickerPDF } from './utils';
generateDeliveryStickerPDF();
```

### 4. Etiqueta de Envío PDF (`shippingLabelPDF.js`)

**Formato:** Landscape (21 x 9.9 cm)

**Características:**
- **Sección Remitente:**
  - Orden de servicio
  - Nombre y RUC/DNI
  - Dirección completa
  - Teléfono y correo
  - Causal de devolución (4 opciones)
- **Sección Destinatario:**
  - Destino y provincia
  - Nombre completo
  - Dirección de entrega
  - Teléfono y RUC/DNI
- **Características físicas:**
  - Cantidad de paquetes
  - Peso en Kg
  - Peso volumétrico
  - Contenido de mercancía
- **Códigos:**
  - Código de barras CODE128 (tracking)
  - QR code para seguimiento online
- **Campos adicionales:**
  - Fecha y hora de entrega
  - Espacio para firma y sello

**Uso:**
```javascript
import { shippingLabelPDF } from './utils';
shippingLabelPDF();
```

## 🎨 Personalización

### Modificar Colores

En cada archivo de `src/utils/`, busca las propiedades `fillColor`:

```javascript
// Ejemplo en quotationPDF.js
headStyles: {
  fillColor: [93, 182, 251],  // RGB: Azul claro
  textColor: [255, 255, 255],  // RGB: Blanco
}
```

### Cambiar Logos

1. Coloca tu logo en `/public/`
2. Actualiza la ruta en el archivo correspondiente:

```javascript
doc.addImage("/tu-logo.png", "PNG", x, y, ancho, alto);
```

### Ajustar Tamaños

Modifica las dimensiones en la configuración de jsPDF:

```javascript
const doc = new jsPDF({
  unit: 'cm',
  format: [altura, ancho],  // en cm
  orientation: 'portrait'   // o 'landscape'
});
```

### Modificar Datos de Empresa

Edita las constantes al inicio de cada archivo:

```javascript
const empresa = {
  nombre: 'Tu Empresa',
  ruc: '12345678901',
  direccion: 'Tu dirección',
  telefono: '123456789',
  email: 'contacto@tuempresa.com'
};
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

MIT © Transportes Mr Logistik

## 👥 Autor

Transportes Mr Logistik S.A.C
- Website: www.logistikmr.com
- Email: mrlogistik@hotmail.com
- Teléfono: (51) 976-037-013

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
