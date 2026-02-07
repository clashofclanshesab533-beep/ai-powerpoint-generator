// promptEngine.js

class PromptEngine {
    constructor() {
        this.templates = {};
    }

    // Method to add a template
    addTemplate(name, template) {
        this.templates[name] = template;
    }

    // Method to handle a prompt
    handlePrompt(templateName, data) {
        if (!this.templates[templateName]) {
            throw new Error(`Template ${templateName} not found`);
        }
        return this.fillTemplate(this.templates[templateName], data);
    }

    // Method to fill the template with data
    fillTemplate(template, data) {
        return template.replace(/\{(\w+)\}/g, (match, key) => {
            return typeof data[key] !== 'undefined' ? data[key] : match;
        });
    }
}

// Example usage:
const engine = new PromptEngine();
engine.addTemplate('greeting', 'Hello, {name}! Welcome to {place}.');
const output = engine.handlePrompt('greeting', { name: 'Alice', place: 'Wonderland' });
console.log(output); // Hello, Alice! Welcome to Wonderland.