// slideGenerator.js

function generateSlide(title, content) {
    return {
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
        // Additional slide properties can be added here
    };
}

// Example of usage:
const slide1 = generateSlide("Welcome to My Presentation", "This is the content of the first slide.");

console.log(slide1); // Logs the generated slide object
