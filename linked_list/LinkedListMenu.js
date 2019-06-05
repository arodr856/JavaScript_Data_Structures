function runProgram(){
    printMenu();
}

function printMenu(){
    console.log('1. Add node\n' +
                '2. Insert node\n' +
                '3. Delete node\n' +
                '4. Check if node exist\n' +
                '5. Quit');
}

module.exports = runProgram;