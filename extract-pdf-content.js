const fs = require('fs');
const pdf = require('pdf-parse');

async function extractPDFContent() {
  try {
    const dataBuffer = fs.readFileSync('./public/SkillMetrix-Brochure.pdf');
    
    // Call pdf-parse correctly
    const data = await pdf(dataBuffer);
    
    console.log('=== PDF CONTENT EXTRACTED ===');
    console.log('Number of pages:', data.numpages);
    console.log('Text content:');
    console.log('================================');
    console.log(data.text);
    console.log('================================');
    
    // Save to file for easier reading
    fs.writeFileSync('./skillmetrix-content.txt', data.text);
    console.log('Content saved to skillmetrix-content.txt');
    
  } catch (error) {
    console.error('Error extracting PDF:', error);
    console.error('Error details:', error.message);
  }
}

extractPDFContent();