import { createHash } from 'node:crypto'
import fs from 'fs/promises';
import {checkFileExists} from "./checkExist.js";
import * as h from "../helper.js";

const hash = async (srcfile) => {
    if (srcfile) {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (!srcexist) {
                console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist`)
            } else {
                const file = await fs.readFile(srcfile,"utf8");
                const filehash = createHash('sha256').update(file).digest('hex')
                console.log(filehash)
            }
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
    }
};

export default hash