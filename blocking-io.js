var fs = require('fs')
var contents = fs.readFileSync('./example.txt')
console.log(contents.toString().substr(0, 20))
console.log('some other stuff...')
