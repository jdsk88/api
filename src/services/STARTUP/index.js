import { execSync } from "child_process";

function getData(cwd, command) {
    return execSync(command, { cwd, encoding: "utf8" });
}

function getIp(cwd) {
    return getData(cwd, "ifconfig");
}

var data = getIp();
const ip = /192.(\d?)(\d?)(\d?).(\d?)(\d?)(\d?).(\d?)(\d?)(\d?)/g;
const arr = [...data.match(ip)]

export const NetwortkAddress = {
    ip: arr[0]
}

// const regexp = /i(n)(et(\d?))/g;