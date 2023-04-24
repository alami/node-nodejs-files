import { fileURLToPath } from 'url';
import path from 'path';


export const usersOSdir='c:\\Users\\'
export const pathcomponents = path.parse(usersOSdir)
//  { root: 'c:\\', dir: 'c:\\Users', base: 'User', ext: '', name: 'User' }
export const OSdir='c:\\'


export const getCurrentFolder = (path) => {
    const filename = fileURLToPath(path);
    return path.dirname(filename);
}

export const msgErrInput = 'Invalid input';
export const msgErrArgs = 'Invalid arguments';
export const msgHelp = '? - help by commands';
export const msgErrStart = ', use: node start -- --username="username"';

export const helplist =
  '--- List of operations and their syntax:---\n\
  \tup - upper till Root dir\n\
  \tls - directore list\n\
  \tcd path_to_directory\n\
  --- Basic operations with files:---\n\
  \tcat path_to_file\n\
  \tadd new_file_name\n\
  \trn path_to_file new_filename\n\
  \tcp path_to_file path_to_new_directory\n\
  \tmv path_to_file path_to_new_directory\n\
  \trm path_to_file\n\
  --- Operating system info:---\n\
  \tos --EOL\n\
  \tos --cpus\n\
  \tos --homedir\n\
  \tos --username\n\
  \tos --architecture\n\
  --- Hash/Compress operations:---\n\
  \thash path_to_file\n\
  \tcompress path_to_file path_to_destination\n\
  \tdecompress path_to_file path_to_destination\n\
  '