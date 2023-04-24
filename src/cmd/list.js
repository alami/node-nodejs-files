import fs from 'fs/promises';
import path from 'path';

import {checkPathExists, checkFileExists} from '../helperdir.js'
import * as h from "../helper.js";

//const srcdir = 'C:\\Users\\user\\Videos'
export default async function list (srcdir){
  if (srcdir) {
    try {
      const direxist = await checkPathExists(srcdir)
      if (!direxist)
        console.log(`${h.msgErrArgs}, 'folder ${srcdir}' isn't exist`)
      else {
        let tabfiles = []
        let tabdirs = []
        const files = await fs.readdir(srcdir)
        let ii=0
        for (const item of files) {
          const statsObj = await checkFileExists(path.join(srcdir, item))
          if (statsObj){//item.stat()) {
            tabfiles.push({
              Name: item,
              Type: 'file'
            })
          } else {
            tabdirs.push({
              Name: item,
              Type: 'dir'
            })
          }
        }
        console.table(tabdirs.sort().concat(tabfiles.sort()))
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
  }
};
//await list(srcdir);
