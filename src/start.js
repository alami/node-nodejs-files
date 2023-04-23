import path from 'path'
import os from 'os'
import process from 'process'
import * as d from "./helperdir.js";
import * as h from "./helper.js";
import handler from "./handler.js";
import list from "./cmd/list.js";
import cd from "./cmd/cd.js";
import cat from "./cmd/cat.js";
import add from "./cmd/add.js";
import rename from "./cmd/rename.js";
import remove from "./cmd/remove.js";
import copy from "./cmd/copy.js";
import {flags} from "./cmd/checkExist.js";

let username=''
let tmpdir = ''
const parseArgs = () => {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--') && (process.argv[++i]).startsWith('--username')) {
      username = process.argv[i].substring(11)
      d.changeUserDir(username)
      tmpdir = h.usersOSdir+username //userdir = h.usersOSdir+username
      console.log(`Welcome to the File Manager, ${username}!\n`)
      return true
    }
  }
  if (username == '') {
    console.log(h.msgErrInput+h.msgErrStart)
  }
  return false
};

if (parseArgs()) {
  let cmd = ''
  while (cmd != 'q') {
    cmd = await handler(tmpdir)
    var cmdargs = cmd.trim().split(' ');
    switch (cmdargs[0]) {
      case 'up':
        if (h.pathcomponents.root != tmpdir)
           tmpdir=path.resolve(tmpdir,'..')
        else console.log(`can\'t up\n${h.msgHelp}`)
        break
      case 'ls':
        await list(tmpdir)
        break
      case 'cd':
        cd(cmdargs[1])
        tmpdir = process.cwd()
        break
      case 'cat':
        await add(cmdargs[1])
        break
      case 'add':
        await add(cmdargs[1])
        break
      case 'rn':
        await rename(cmdargs[1],cmdargs[2])
        break
      case 'cp':
        await copy(cmdargs[1],cmdargs[2])
        break
      case 'mv':
        await copy(cmdargs[1],cmdargs[2])
        await remove(cmdargs[1])
        break
      case 'rm':
        await remove(cmdargs[1])
        break
      case 'q':
        console.log(`Thank you for using File Manager goodbye!\n`);
        process.exit()
      case '?': case 'h': case 'help':
        console.log(h.helplist)
        break;
      default:
        console.log(`${h.msgErrInput}: ${cmd}`)
    }
  }
}


