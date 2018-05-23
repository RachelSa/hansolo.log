exports.solo = function solo(msg) {
  let funct = solo.caller.name
  console.log(createHeader(), createMsg(msg, funct))
}

exports.confident = function confident() {
  let funct = confident.caller.name
  console.log(createHeader(),createMsg("You know, sometimes I amaze even myself.", funct))
}

function createHeader(){
  return "\n   .    === MILLENNIUM FALCON ===       *   \n" + " .   *   .     starship log     *  .       .\n\n"
}

function createMsg(msg, funct){
  let uptime = process.uptime()
  let dir = __dirname.split("/")
  let file = dir[dir.length-1] || "?"
  return `MESSAGE: ${msg}` + `\n SOURCE: {file: ${file}, function: ${funct || "?"}}` + `\n UPTIME: ${uptime}`

}
