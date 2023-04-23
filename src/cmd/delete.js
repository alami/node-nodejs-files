import fs from 'fs/promises';
import {checkFileExists} from "./checkExist.js"
import * as h from "../helper.js";

const remove = async (srcfile) => {
    if (srcfile) {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (!srcexist) {
                console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist`)
            } else {
                await fs.unlink(srcfile)
                console.log(`${srcfile} was deleted`)
            }
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
    }
};
export default remove