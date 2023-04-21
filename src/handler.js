import * as readline from 'node:readline'
function readConsoleInput(userdir) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        console.log(`Thank you for using File Manager goodbye!\n`);
        process.exit();
    });

    return new Promise((resolve, reject) => {
        rl.question(`${userdir}>>`, (input) => {
            resolve(input);
            rl.close();
        });
    });
}

export async function handler(userdir) {
    const input = await readConsoleInput(userdir);
    //console.log(`${userdir}>>`, input);
    return input
}

