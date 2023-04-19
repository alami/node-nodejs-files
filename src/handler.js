import * as readline from 'node:readline'

function readConsoleInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question('>> ', (input) => {
            resolve(input);
            rl.close();
        });
    });
}

// Example usage
async function handler() {
    const input = await readConsoleInput();
    console.log('Entered:', input);
    return input
}

export {handler}