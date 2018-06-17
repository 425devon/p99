const ora = require('ora')
const getSearch = require('../utils/search')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const item = args._[1];
    const search = await getSearch(item)

    spinner.stop()

    console.log(search)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}