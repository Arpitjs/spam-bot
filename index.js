// let moment = require('moment')
// let random = require('random')
// let simpleGit = require('simple-git')
// let jsonFile = require('jsonfile')
// let FILE_PATH = './data.json'
// let THIS_FILE = './index.js'

// function makeCommit(n) {
//     if(n === 0) return simpleGit().push()
//             let x = random.int(0, 54)
//             let y = random.int(0, 6)

//             let DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format()

//             let data = { data: DATE }
//             console.log(DATE)

//             jsonFile.writeFile(FILE_PATH, data, (err, done) => {
//                 if (err) console.log(err)
//                 simpleGit().add([FILE_PATH, THIS_FILE]).commit(`new commit @ ${DATE}`, { '--date': DATE }, makeCommit.bind(this, --n))
//             })
// }
// makeCommit(100)


