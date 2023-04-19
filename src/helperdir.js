import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'
export const url = fileURLToPath(import.meta.url)
export const diradd = (add) => {
    return  path.join(path.dirname(url), add)
}

export async function checkPathExists(path) {
    return fs.stat(path)
        .then((res) => res.isDirectory())
        .catch((err) => err.code === 'ENOENT' ? false : err);
}
export async function checkFileExists(path) {
    return fs.stat(path)
        .then((res) => res.isFile())
        .catch((err) => err.code === 'ENOENT' ? false : err);
}
export const changeUserDir = (user) =>{
    try {
        process.chdir('c:\\Users\\'+user);
        console.log(`Current directory: ${process.cwd()}`);
    } catch (error) {
        console.error(`chdir error: ${error}`);
    }
}
changeUserDir('User')
console.log('temp dir: '+url)
console.log('add dir: '+diradd('temp'))
