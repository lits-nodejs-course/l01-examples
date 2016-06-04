var fs = require('fs')
fs.readFile('./example.txt', (err, contents) => {
  console.log(contents.toString().substr(0, 20))
})
console.log('some other stuff...')
