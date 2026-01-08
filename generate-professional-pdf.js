const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateProfessionalPDF() {
  try {
    console.log('🚀 Starting professional PDF generation...');
    
    // Launch browser with optimized settings
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });
    
    const page = await browser.newPage();
    
    // Set viewport for better rendering
    await page.setViewport({ width: 1200, height: 1600 });
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'quicklearn-professional-brochure.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    console.log('📄 Loading HTML content...');
    
    // Set content and wait for fonts to load
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Wait for Google Fonts to load completely
    console.log('🔤 Loading fonts...');
    await page.waitForTimeout(3000);
    
    // Ensure all images and styles are loaded
    await page.evaluate(() => {
      return new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', resolve);
        }
      });
    });
    
    console.log('🎨 Generating PDF...');
    
    // Generate PDF with optimized settings
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
      displayHeaderFooter: false,
      quality: 100
    });
    
    // Save PDF
    const outputPath = path.join(__dirname, 'QuickLearn-Systems-Professional-Brochure.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    const fileSizeKB = Math.round(pdfBuffer.length / 1024);
    const fileSizeMB = (fileSizeKB / 1024).toFixed(2);
    
    console.log('✅ Professional PDF generated successfully!');
    console.log(`📁 File: ${outputPath}`);
    console.log(`📊 Size: ${fileSizeKB} KB (${fileSizeMB} MB)`);
    console.log('🎯 Features: Professional fonts, website colors, 3 pages, comprehensive content');
    
    await browser.close();
    
  } catch (error) {
    console.error('❌ Error generating professional PDF:', error);
    console.error('Stack trace:', error.stack);
  }
}

// Run the function
generateProfessionalPDF();