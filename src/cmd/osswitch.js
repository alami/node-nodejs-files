import os from 'os'
import * as h from "../helper.js";

export default function osswitch (arg) {
    switch (arg) {
      case 'EOL':
        console.log(JSON.stringify(os.EOL))
        break
      case 'cpus':
        let cpu = os.cpus();
        let cores = 0
        cpu.forEach(item => {
          let speed= item.speed
          let floor = Math.floor(speed/1000)
          let drob = speed % 1000
          console.log(`Core${cores++}: ${item.model}, speed: ${floor}.${drob} GHz`)
        });
        console.log(`Total CPU cores is ${cores}`)
        break
      case 'homedir':
        console.log(os.homedir())
        break
      case 'username':
        console.log(os.userInfo().username)
        break
      case 'architecture':
        console.log(os.arch())
        break
      default:
        console.log(`${h.msgErrArgs} of 'os'\n${h.msgHelp}`)
    }
}