import fs from 'fs/promises';
import * as h from "../helper.js";

export let flags;
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

export async function check2Files(srcfile, dstfile) {
  flags=1
  if (!srcfile || !dstfile) {
    console.log(`${h.msgErrArgs}\n${h.msgHelp}`)
    flags=0
  } else {
    try {
      const srcexist = await checkFileExists(srcfile)
      if (!srcexist) {
        console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist`)
        flags = 0
      }
    } catch (e) {
      console.log(`${h.msgErrArgs}, '${srcfile}' isn't exist(throw)`)
    }
    try {
      const dstexist = await checkFileExists(dstfile)
      if (dstexist) {
        console.log(`${h.msgErrArgs}, '${dstfile}' already exist`)
        flags = 0
      }
    } catch (e) {
      console.log(`${h.msgErrArgs}, '${dstfile}' already exist(throw)`)
    }
  }
}


