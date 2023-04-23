import fs from 'fs/promises';
import {checkFileExists} from "./checkExist.js"
import * as h from "../helper.js";

const rename = async (srcfile, dstfile) => {
    let flag=1
    if (!srcfile || !dstfile) {
        console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
    } else {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (!srcexist) {
                console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist`)
                flag=0
            }
        } catch (e) {
            console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist(throw)`)
        }
        try {
            const dstexist = await checkFileExists(dstfile)
            if (dstexist) {
                console.log(`${h.msgErrArgs}, '${dstfile}' already exist`)
                flag = 0
            }
        } catch (e) {
            console.log(`${h.msgErrArgs}, '${dstfile}' already exist(throw)`)
        }
        if (flag)
            try {
                await fs.rename(srcfile, dstfile);
                console.log(`${srcfile} renamed to ${dstfile}`)
            } catch (e) {
                 console.log(`Wow! ${e}`)
            }
    }
}
export default rename