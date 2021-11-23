const fs = require('fs')

const readTxt = fs.readFileSync(`/Projects/NodeJS/project1/read.txt`,'utf-8')
console.log(readTxt)

const writeTxt = `${readTxt}.\nCreated on ${Date.now()}`

fs.writeFileSync(`/Projects/NodeJS/project1/read.txt`,writeTxt)
console.log('writting is done')
