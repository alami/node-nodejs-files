import process from 'process'
import * as h from "../helper.js";

export default function cd (tmpdir) {
  try {
    console.log(tmpdir)
    process.chdir(tmpdir)
  }
  catch (e) {
    console.log(`can\'t cd ${tmpdir}\n${h.msgHelp}`)
  }
}