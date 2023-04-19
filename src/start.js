import {argv} from 'process';
import {changeUserDir} from "./helperdir.js";
import * as h from "./helper.js";
import {handler} from "./handler.js";
const parseArgs = () => {
  let username=''
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--') && (argv[++i]).startsWith('--username')) {
      username = argv[i].substring(11)
      changeUserDir(username)
      console.log(h.msgWelcome+username +'!')
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
  while (true) {
    cmd = await handler()
    if (cmd == 'q') break
  }
}


