import colors from "colors";

export const terminalLOG__mint = (message) => {
    const consoleLOG = console.log(colors.bgCyan.white(`${message}`))
return consoleLOG
}
export const terminalLOG__black = (message) => {
    const consoleLOG = console.log(colors.bgBlack.white(`${message}`))
return consoleLOG
}
export const terminalLOG__white = (message) => {
    const consoleLOG = console.log(colors.bgWhite.black(`${message}`))
return consoleLOG
}
export const terminalLOG__warrning = (message) => {
    const consoleLOG = console.log(colors.bgMagenta.white(`${message}`))
return consoleLOG
}
export const terminalLOG__error = (message) => {
    const consoleLOG = console.log(colors.red(`${message}`))
return consoleLOG
}
export const terminalLOG__success = (message) => {
    const consoleLOG = console.log(colors.green(`${message}`))
return consoleLOG
}