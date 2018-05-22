exports.solo = (msg) => {
  printHeader()
  printMsg(msg)
}

exports.confident = () => {
  printHeader()
  printMsg("You know, sometimes I amaze even myself.")
}

function printHeader(){
  console.log(" .     *          .     *            .      ",
              "          .  *                *  .       .  ",
              "   .    === MILLENNIUM FALCON ===       *   ",
              " .   *   .     starship log     *  .        ",
              "  *            .            .         *     \n")
}

function printMsg(msg){
  let ts = new Date()
  let dir = process.cwd()
  console.log(`MESSAGE:\n ${msg}\n`,dir,ts," --------------------------------- ")

}
