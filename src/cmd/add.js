import fs from 'fs/promises';
import * as h from '../helper.js'
import {checkFileExists} from "./checkExist.js"
export default async function add (srcfile) {
    if (srcfile) {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (srcexist) {
                console.log(`${h.msgErrArgs}, '${srcfile}' already exist`)
            } else {
                await fs.writeFile(srcfile, "");
                //fs.closeSync(fs.openSync(filepath, 'w'));
                console.log(`'${srcfile}' file created`)
            }
        } catch (e) {
            console.log(`${h.msgErrArgs}, Unknown file '${srcfile}'`)
        }
     } else {
        console.log(`${h.msgErrArgs} '${srcfile}'\n${h.msgHelp}`)
    }
};