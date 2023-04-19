import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getCurrentFolder = (path) => {
    const filename = fileURLToPath(path);
    return dirname(filename);
}

export const msgErrInput = 'Invalid input, ';
export const msgErrStart = 'use: node start -- --username="username"';
export const msgWelcome = 'Welcome to the File Manager, ';
