// zipAnalyzer.js

// Functionality to analyze ZIP files
const fs = require('fs');
const unzipper = require('unzipper');

/**
 * Analyzes the contents of a ZIP file.
 * @param {string} zipFilePath - The path to the ZIP file.
 * @returns {Promise<void>} - A promise that resolves when analysis is complete.
 */
const analyzeZipFile = (zipFilePath) => {
    return new Promise((resolve, reject) => {
        const fileList = [];

        fs.createReadStream(zipFilePath)
            .pipe(unzipper.Parse())
            .on('entry', (entry) => {
                fileList.push(entry.path);
                entry.autodrain(); // Avoid file descriptor leak
            })
            .on('finish', () => {
                console.log('Analysis complete! Files in the ZIP:', fileList);
                resolve();
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};

// Example usage of the analyzeZipFile function
// analyzeZipFile('path/to/your/zipfile.zip');

module.exports = analyzeZipFile;