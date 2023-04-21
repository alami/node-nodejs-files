import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'
import * as h from './helper.js'
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
        process.chdir(h.usersOSdir+user);
        return true
    } catch (error) {
        console.error(`chdir error: ${error}`);
    }
    return false
}
/*export const up = (tmpdir) =>{
    try {
        path.resolve(tmpdir,'..')
        process.chdir('..');
        return tmpdir
    } catch (error) {
        console.error(`chdir error: ${error}`);
    }
    return tmpdir
}*/
