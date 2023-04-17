import {argv} from 'process';
const parseArgs = () => {
  let username=''
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--') && (argv[++i]).startsWith('--username')) {
      username = argv[i].substring(11)
      console.log('Welcome to the File Manager, '+username +'!')
    }
  }
  if (username == '') {
    console.log('Invalid input, use: node start -- --username=""'+username)
  }
};
parseArgs();
