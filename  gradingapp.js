function getUserInput() {
    const userInput = prompt('Enter your marks:');
    const parsedMarks = parseFloat(userInput);
    if (!isNaN(parsedMarks)) {
        const result = grade(parsedMarks);
        alert(`Your grade is: ${result}`);
    } else {
        alert('Please enter a valid numeric value.');
    }
}
function grade(marks){
    if (marks >79 && marks <=100){
        return 'A'
    }
    else if (marks >= 60 && marks <=79) {
        return "B"
    }
    else if (marks >= 49 && marks <=59) {
        return 'C'
    }
    else if (marks >=40 && marks <=48) {
        return 'D'
    }
    else if (marks <40) {
        return 'E'
    }
    else {return 'invalid input!'}
}