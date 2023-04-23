import fs  from 'node:fs';
import zlib  from 'node:zlib';
import { pipeline }  from 'node:stream/promises';
import {checkFileExists} from "./checkExist.js";
import * as h from "../helper.js";

const compress = async (srcfile,dstfile) => {
    if (srcfile && dstfile) {
        try {
            const srcexist = await checkFileExists(srcfile)
            if (!srcexist) {
                console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist`)
            } else {
                await pipeline(
                  fs.createReadStream(srcfile),
                  zlib.createGzip(),
                  fs.createWriteStream(dstfile),
                );
                console.log(`${srcfile} was compressed to ${dstfile}`);
            }
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
    }
};

export default compress