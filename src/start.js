import path from 'path'
import {argv} from 'process';
import {changeUserDir} from "./helperdir.js";
import * as h from "./helper.js";
import {handler} from "./handler.js";
import {pathcomponents} from "./helper.js";

let username=''
let tmpdir = ''  //let userdir=''
const parseArgs = () => {
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--') && (argv[++i]).startsWith('--username')) {
      username = argv[i].substring(11)
      changeUserDir(username)
      tmpdir = h.usersOSdir+username //userdir = h.usersOSdir+username
      console.log(`Welcome to the File Manager, ${username}!`)
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
        if (pathcomponents.root != tmpdir)
           tmpdir=path.resolve(tmpdir,'..')
        else console.log('can\'t up')
        break
      case 'cd': break
      case 'q':
        console.log(`Welcome to the File Manager, ${username}!`)
        process.exit()
      default:
        console.log(`${h.msgErrInput}: ${cmd}`)
    }

  }
}


