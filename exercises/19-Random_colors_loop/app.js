function getColor(colorNumber = 0) {
    colorNumber = parseInt(colorNumber);
    switch (colorNumber) {
        case 1: return "red";
        case 2: return "yellow";
        case 3: return "blue";
        case 4: return "green";
        default: return "black";
    }
}

function getAllStudentColors() {
    // Loop through 10 students
    for (let student = 1; student <= 10; student++) {
        // Generate a random color number between 1 and 4
        let randomColorNumber = Math.floor(Math.random() * 4) + 1;
        
        // Get the color based on the random number
        let studentColor = getColor(randomColorNumber);
        
        // Print the color for each student
        console.log(`Student ${student} color: ${studentColor}`);
    }
}

// Call the function to print colors for 10 students
getAllStudentColors();



