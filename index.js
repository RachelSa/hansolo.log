exports.solo = (msg) => {
  console.log(createHeader(), createMsg(msg))
}

exports.confident = () => {
  console.log(createHeader(), createMsg("You know, sometimes I amaze even myself."))
}

function createHeader(){
  return " .     *          .     *            .      \n" + "          .  *                *  .       .  \n" + "   .    === MILLENNIUM FALCON ===       *   \n" + " .   *   .     starship log     *  .        \n" + "  *            .            .         *     \n\n"
}

function createMsg(msg){
  let ts = new Date()
  let dir = process.cwd()
  return `MESSAGE:\n ${msg}\n\n` + `${dir}\n` + `${ts}\n` + " --------------------------------- "
}
