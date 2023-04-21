import { fileURLToPath } from 'url';
import path from 'path';

export const usersOSdir='c:\\Users\\'
export const pathcomponents = path.parse(usersOSdir)
//  { root: 'c:\\', dir: 'c:\\Users', base: 'User', ext: '', name: 'User' }
export const OSdir='c:\\'


export const getCurrentFolder = (path) => {
    const filename = fileURLToPath(path);
    return path.dirname(filename);
}

export const msgErrInput = 'Invalid input';
export const msgErrStart = ', use: node start -- --username="username"';