const PptxGenJS = require('pptxgenjs');

/**
 * Generates a PowerPoint presentation.
 */
function generatePowerPoint() {
    // Create a new presentation
    let pptx = new PptxGenJS();

    // Add a slide
    let slide = pptx.addSlide();
    slide.addText('Hello, PowerPoint!', { x: 1, y: 1, fontSize: 18, color: '005EB8' });

    // Add another slide
    let slide2 = pptx.addSlide();
    slide2.addText('This is a second slide', { x: 1, y: 1, fontSize: 18, color: 'A3C940' });

    // Save presentation
    pptx.writeFile({ fileName: 'SamplePresentation.pptx' });
}

// Call the function to generate the PowerPoint
generatePowerPoint();
