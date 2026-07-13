const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
const pdfPath = path.join(publicDir, 'capabilities.pdf');
const writeStream = fs.createWriteStream(pdfPath);
doc.pipe(writeStream);

// Design/Style guide
// Colors:
// Background: #FDF2E9 (Beige)
// Secondary background: #131415 (Dark)
// Primary Text: #131415 (Dark)
// Secondary: #1B43F4 (Blue)
// Highlight: #7C3AED (Purple)

// Add Content
// Page 1: Cover
doc.rect(0, 0, 595.28, 841.89).fill('#FDF2E9');

// Large Title
doc.fillColor('#131415');
doc.fontSize(38).font('Helvetica-Bold').text('REWORKS STUDIO', 60, 220);
doc.fontSize(16).font('Helvetica').fillColor('#1B43F4').text('CAPABILITIES & SERVICES DECK', 60, 265);

// Horizontal line
doc.lineWidth(3.5);
doc.strokeColor('#131415');
doc.moveTo(60, 290);
doc.lineTo(380, 290);
doc.stroke();

// Founders and Studio Info
doc.fontSize(11).font('Helvetica-Bold').fillColor('#131415').text('FOUNDERS:', 60, 330);
doc.font('Helvetica').fontSize(11).fillColor('#131415').text('Rishi Yadav & Navdeep Bhardwaj', 60, 348);

doc.font('Helvetica-Bold').fontSize(11).text('STUDIO CORE:', 60, 390);
doc.font('Helvetica').fontSize(11).text('India-based Digital & Creative Design Engine', 60, 408);

doc.font('Helvetica-Bold').fontSize(11).text('WEB PORTAL:', 60, 450);
doc.font('Helvetica').fillColor('#7C3AED').text('www.reworksstudio.in', 60, 468);

// Add a cool sidebar accent
doc.rect(545, 0, 50, 841.89).fill('#1B43F4');
doc.rect(505, 0, 40, 841.89).fill('#7C3AED');

// Page 2: Capabilities Detail
doc.addPage();
doc.rect(0, 0, 595.28, 841.89).fill('#FDF2E9');

doc.fillColor('#131415').fontSize(24).font('Helvetica-Bold').text('WHAT WE BUILD', 60, 60);
doc.fontSize(10).font('Helvetica').fillColor('#666666').text('A multi-disciplinary design and dev team engineering elite digital experiences.', 60, 90);

doc.lineWidth(1);
doc.strokeColor('#131415');
doc.moveTo(60, 110);
doc.lineTo(500, 110);
doc.stroke();

// 1. Creative UI/UX Design
doc.fontSize(13).font('Helvetica-Bold').fillColor('#1B43F4').text('01. UI/UX Design & Art Direction', 60, 130);
doc.fontSize(9.5).font('Helvetica').fillColor('#131415').text(
  'Crafting premium user interfaces, high-contrast aesthetics, custom typography, and dynamic layouts. Featured products like Baemark and Chadni Resorts showcase our emphasis on sleek flow and product clarity.',
  60,
  148,
  { width: 440 }
);

// 2. Custom Web Development
doc.fontSize(13).font('Helvetica-Bold').fillColor('#1B43F4').text('02. Next.js & Frontend Engineering', 60, 210);
doc.fontSize(9.5).font('Helvetica').fillColor('#131415').text(
  'Developing supercharged single-page apps, static websites, and serverless APIs with Next.js and React. Built robust vendor sync systems like Smart Plaza and catalog hubs like Om Garments.',
  60,
  228,
  { width: 440 }
);

// 3. SaaS & AI Agent Systems
doc.fontSize(13).font('Helvetica-Bold').fillColor('#1B43F4').text('03. Intelligent AI Agents & SaaS Platforms', 60, 290);
doc.fontSize(9.5).font('Helvetica').fillColor('#131415').text(
  'Deploying LLM-driven architectures (Llama-3, GPT-4) and vector search nodes (Qdrant). Key frameworks include ReviewBoost AI (sentiment response agent) and Orbis Design Compiler (screenshot to Next.js translator).',
  60,
  308,
  { width: 440 }
);

// 4. Healthcare & Education Tools
doc.fontSize(13).font('Helvetica-Bold').fillColor('#1B43F4').text('04. Clinical Database & Training Architectures', 60, 370);
doc.fontSize(9.5).font('Helvetica').fillColor('#131415').text(
  'Engineering HIPAA-compliant tracking systems (Goyal Netra), telemetry registry nodes (STEM Labs IoT console), and course batching portals (GICE Academy).',
  60,
  388,
  { width: 440 }
);

// Team Narrative
doc.rect(60, 470, 440, 110).fill('#131415');
doc.fontSize(11).font('Helvetica-Bold').fillColor('#D0FF71').text('STUDIO STORY', 75, 488);
doc.fontSize(9.5).font('Helvetica').fillColor('#FFFFFF').text(
  'Founded by Rishi Yadav and later joined by Navdeep Bhardwaj, Reworks Studio has evolved from a local creative studio in India to a robust team of designers, visual architects, and developers. We build production-ready digital products that communicate, connect, and scale.',
  75,
  508,
  { width: 410, lineGap: 3.5 }
);

// Footer details
doc.fontSize(9).font('Helvetica-Bold').fillColor('#1B43F4').text('GET IN TOUCH:', 60, 710);
doc.fontSize(9).font('Helvetica').fillColor('#131415').text('Email: connect@reworksstudio.in   |   Web: www.reworksstudio.in   |   Origin: India', 60, 728);

doc.end();

writeStream.on('finish', () => {
  console.log('PDF successfully generated at public/capabilities.pdf!');
});
