const trash          = require('trash');
const { resolveApp } = require('./util');

trash([
  resolveApp('async.png'),
  resolveApp('sync.png'),

  resolveApp('esm'),
]);
