const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route for prompt generation
app.post('/generate-prompt', (req, res) => {
    const promptData = req.body; // Your logic to handle prompt generation
    res.json({ message: 'Prompt generated', data: promptData });
});

// Route for zip generation
app.post('/generate-zip', (req, res) => {
    const zipData = req.body; // Your logic to handle zip file generation
    res.json({ message: 'Zip file generated', data: zipData });
});

// Route for template generation
app.post('/generate-template', (req, res) => {
    const templateData = req.body; // Your logic to handle template generation
    res.json({ message: 'Template generated', data: templateData });
});

// Start the server
app.listen(port, () => {
    console.log(`AI PowerPoint Generator server running at http://localhost:${port}`);
});