exports.solo = (msg) => {
  printHeader()
  printMsg(msg)
}

exports.confident = () => {
  printHeader()
  printMsg("You know, sometimes I amaze even myself.")
}

function printHeader(){
  console.log(" .     *          .     *            .      ")
  console.log("          .  *                *  .       .  ")
  console.log("   .    === MILLENNIUM FALCON ===       *   ")
  console.log(" .   *   .     starship log     *  .        ")
  console.log("  *            .            .         *     \n")
}

function printMsg(msg){
  let ts = new Date()
  let dir = process.cwd()
  console.log(`MESSAGE:\n ${msg}\n`)
  console.log(dir)
  console.log(ts)
  console.log(" --------------------------------- ")
}
