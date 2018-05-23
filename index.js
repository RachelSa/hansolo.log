exports.solo = function solo(msg) {
  let caller = solo.caller
  let funct = caller ? caller.name : "?"
  console.log(createHeader(), createMsg(msg, funct))
}

exports.confident = function confident() {
  let caller = confident.caller
  let funct = caller ? caller.name : "?"
  console.log(createHeader(),createMsg("You know, sometimes I amaze even myself.", funct))
}

function createHeader(){
  return "\n   .    === MILLENNIUM FALCON ===       *   \n" + " .   *   .     starship log     *  .       .\n\n"
}

function createMsg(msg, funct){
  if (!isBrowser()){
    let uptime = process.uptime()
    let dir = __dirname.split("/")
    let file = dir[dir.length-1] || "?"
    return `MESSAGE: ${msg}` + `\n SOURCE: {file: ${file}, function: ${funct || '?'}}` + `\n UPTIME: ${uptime}`
  }
  return `MESSAGE: ${msg}`
}

function isBrowser(){
  try {
    return !!window
  }
  catch(e){
    return false
  }
}
