# hansolo.log
A stylized javascript logger that helps you debug with the confidence of the millennium falcon commander.

```
.    === MILLENNIUM FALCON ===       *   
.   *   .     starship log     *  .       .

MESSAGE: your log here
TRACE: hello.js
CALLER: yourfunct()
UPTIME: 0.082
```
## How to Install

```npm i han_solo_log```

## How to Use

```
const han = require('han_solo_log')

// option 1:
// Log a message with the millennium falcon header using .solo().
// Pass in your log message string as an argument.
// The log will include the file name and calling function ('SOURCE'),
// as well as the number of seconds the node process runs ('UPTIME').
// Note: In browser, file, function, and uptime will not log.

han.solo("your log here")

// option 2:
// Simply use .confident() without an argument. The header, source, and uptime will log with a prewritten message.
// Note: In browser, file, function, and uptime will not log.

han.confident()
```
