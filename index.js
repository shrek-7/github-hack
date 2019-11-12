const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const random = require('random');




const makeNCommits = (n) => {

  if(n===0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0 ,6);

  const DATE = moment().subtract(1, 'y').subtract(2, 'd')
    .add(x-1, 'w').add(y, 'd').format();

  const date_OBJ = {
    date: DATE
  }
  console.log("Commit for date : =>", DATE)
  jsonfile.writeFile(FILE_PATH, date_OBJ, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, {'--date': DATE}, makeNCommits.bind(this, --n))

  });

}

makeNCommits(200);



