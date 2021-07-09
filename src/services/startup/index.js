import { execSync } from "child_process";
import { terminalLOG__mint, terminalLOG__warrning, terminalLOG__white } from "../consolelog/console.js";

function getData(cwd, command) {
    return execSync(command, { cwd, encoding: "utf8" });
}

function getIp(cwd) {
    return getData(cwd, "ifconfig");
}

var data = getIp();
const ip = /192.(\d?)(\d?)(\d?).(\d?)(\d?)(\d?).(\d?)(\d?)(\d?)/g;
const arr = [ ...data.match(ip)]
export const NetwortkAddress = {
    ip: arr[0]
}


const startupTerminalMessage = {
    nodeVersion: `Node Version: ${process.version}`,
    today : `Today is: ${new Date().toLocaleDateString()}`,

}
terminalLOG__warrning(startupTerminalMessage.nodeVersion);
terminalLOG__mint(startupTerminalMessage.today);


// console.log(arr)
// const regexp = /i(n)(et(\d?))/g;