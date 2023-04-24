import fs from 'fs/promises';
import * as h from '../helper.js'
import {checkFileExists} from "./checkExist.js"
export default async function cat (srcfile) {
    if (srcfile) {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (!srcexist) {
                console.log(`${h.msgErrArgs}, Unknown file '${srcfile}'`)
            } else {
                const file = await fs.readFile(srcfile, "utf8");
                console.log(file)
            }
        } catch (e) {
            console.log(`${h.msgErrArgs}, Unknown file '${srcfile}'`)
        }
     } else {
        console.log(`${h.msgErrArgs} '${srcfile}'\n${h.msgHelp}`)
    }

};