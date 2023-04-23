import fs from 'fs';
import {check2Files, flags} from "./checkExist.js"
const copy = async (srcfile, dstfile) => {
    try {
        await check2Files(srcfile, dstfile)
        if (flags){
            try {
                fs.createReadStream(srcfile)
                  .pipe(fs.createWriteStream(dstfile));
                console.log(`${srcfile} copied to ${dstfile}`)
            } catch (e) {
                console.log(`Oops! ${e}`)
            }
        }
    } catch (e) {
        console.log(e)
    }
};

export default copy