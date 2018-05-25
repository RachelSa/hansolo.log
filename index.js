const header =  `\n   .    === MILLENNIUM FALCON ===       *   \n .   *   .     starship log     *  .       .\n\n`

exports.solo = function solo(msg) {
  const call = solo.caller
  const caller = call && call.name ? `${call.name}()` : "global or anonymous"
  console.log(header, createMsg(msg, caller))
}

exports.confident = this.solo.bind(this, "You know, sometimes I amaze even myself.")

function createMsg(msg, funct){
  if (!isBrowser()){
    const uptime = process.uptime()
    const path = module.parent.filename
    const files = path.split("/")
    const file = files[files.length-1] || "?"
    return `MESSAGE: ${msg} \n TRACE: ${file} \n CALLER: ${funct || '?'} \n UPTIME: ${uptime}`
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
