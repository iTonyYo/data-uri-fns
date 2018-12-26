const { join } = require('path');

const fg = require('fast-glob');
const execa = require('execa');
const { forEach } = require('lodash');
const chalk           = require('chalk');

const { appDirectory } = require('./util');

forEach(fg.sync(['src/**/*.js']), async (path) => {
  await execa(
    'npx',
    [
      'babel',
      '-d',
      join(appDirectory, 'esm'),
      join(appDirectory, path),
    ]
  );
});

console.log(`
  ${chalk.greenBright('构建成功!')}
`);
