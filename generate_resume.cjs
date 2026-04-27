const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Fonts and Styling
doc.font('Helvetica-Bold').fontSize(24).text('Nishandh', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(12).fillColor('#444444').text('Frontend Developer | StackNova Technology', { align: 'center' });
doc.moveDown(0.5);

// Contact Info
doc.fontSize(10).fillColor('#666666')
   .text('nishandhkr2000@gmail.com | 9487187639 | 9345364014', { align: 'center' })
   .text('github.com/NishandhKRKR | linkedin.com/in/nishandh-kr-3737a8248/', { align: 'center' });

doc.moveDown(2);

// Standard Format Function
const addSection = (title) => {
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#000000').text(title.toUpperCase());
  doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
  doc.moveDown(0.5);
};

// Summary
addSection('Professional Summary');
doc.font('Helvetica').fontSize(10).fillColor('#333333').text(
  'Dedicated Frontend Developer and founder of StackNova Technology with over 1 year of hands-on experience in building modern, scalable, and highly responsive web applications. Specialized in utilizing React.js, Tailwind CSS, and full-stack MERN technologies to deliver seamless user experiences.'
);
doc.moveDown(1.5);

// Experience
addSection('Experience');
doc.font('Helvetica-Bold').fontSize(11).text('Founder & Frontend Developer');
doc.font('Helvetica').fontSize(10).fillColor('#666666').text('StackNova Technology | Custom Web Solutions');
doc.moveDown(0.5);
doc.fillColor('#333333').text('• Founded and currently operate a freelance development agency focusing on high-converting client applications.');
doc.text('• Architected and deployed dynamic single-page applications (SPAs) and multi-page platforms utilizing React Router and Framer Motion.');
doc.text('• Implemented fully responsive designs and tailored UI/UX utilizing Tailwind CSS and advanced modern state management frameworks.');
doc.moveDown(1.5);

// Projects
addSection('Selected Projects');
doc.font('Helvetica-Bold').fontSize(10).text('Attendance Management System (Fullstack)');
doc.font('Helvetica').text('• Engineered a comprehensive employee geofenced attendance system involving precise geolocation tracking over a MERN stack (MongoDB, Express.js, React.js, Node.js).');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('InstaTrendz E-Commerce Demo');
doc.font('Helvetica').text('• Built an interactive e-commerce catalog featuring automated WhatsApp integration for orders and dynamic product interactions.');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Premium Landing Pages');
doc.font('Helvetica').text('• Designed multiple premium client facing landing pages involving highly animated scroll-triggers, custom cursor tracking, and dark/light theme switching technologies.');
doc.moveDown(1.5);

// Skills
addSection('Technical Skills');
doc.font('Helvetica').fontSize(10)
  .text('• Languages: HTML5, CSS3, JavaScript')
  .text('• Frameworks & Libraries: React.js, Tailwind CSS, Express.js, Framer Motion')
  .text('• Databases & Tools: Node.js, MongoDB, MySQL, Git')
  .text('• Core Competencies: Responsive Web Design, Animated UI/UX, Single Page Applications, System Layouts');

doc.end();
console.log('PDF generated successfully at public/resume.pdf');
