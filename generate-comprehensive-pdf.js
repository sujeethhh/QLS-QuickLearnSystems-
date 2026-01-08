const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateComprehensivePDF() {
  try {
    console.log('Starting comprehensive PDF generation...');
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'comprehensive-brochure.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content and wait for fonts to load
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Wait a bit more for Google Fonts to load
    await page.waitForTimeout(2000);
    
    // Generate PDF with A4 settings
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      },
      preferCSSPageSize: true,
      displayHeaderFooter: false
    });
    
    // Save PDF
    const outputPath = path.join(__dirname, 'QuickLearn-Systems-Comprehensive-Brochure.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log(`✅ Comprehensive PDF generated successfully: ${outputPath}`);
    console.log(`📄 File size: ${Math.round(pdfBuffer.length / 1024)} KB`);
    
    await browser.close();
    
  } catch (error) {
    console.error('❌ Error generating comprehensive PDF:', error);
  }
}

// Run the function
generateComprehensivePDF();