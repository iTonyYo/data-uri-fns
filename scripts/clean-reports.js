const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('yarn-error.log'),
  resolveApp('.nyc_output'),
  resolveApp('coverage'),
  resolveApp('licenses-development.csv '),
  resolveApp('licenses-production.csv'),
]);
