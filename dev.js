import chalk from 'chalk';

import between from './src/between';
import getMimeType from './src/getMimeType';
import saveAsFile from './src/saveAsFile';
import saveAsFileSync from './src/saveAsFileSync';
import { resolveApp } from './scripts/util';

const strSample = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAcdHHS3v2QvS0vWJOOC/okYl5dj87KSYKB9bVu9YAAABPSURBVBjTxcjHDYAwFATRNRhwJqftv1BkGwn9CpjLSA+iaJQExab8tFHCyvaDoIEugw4VDFOFkXsBcqjQU/8LG5YM5oXJ3kjOA7O9cDj/AI2UCDNw61APAAAAAElFTkSuQmCC`;

/**
 * between()
 */
console.log(chalk `{grey {bold between()}, 结果:}`);
console.log(
  between(strSample, `data:`, `;base64`)
);
console.log(`\n`);

/**
 * getMimeType()
 */
console.log(chalk `{grey {bold getMimeType()}, 结果:}`);
console.log(getMimeType(strSample));
console.log(`\n`);

/**
 * saveAsFile()
 */
(async () => {
  try {
    await saveAsFile({
      dataURI: strSample,
      dest: resolveApp('async.png'),
    });
  } catch (error) {
    throw new Error(error);
  }
})()

/**
 * saveAsFileSync()
 */
saveAsFileSync({
  dataURI: strSample,
  dest: resolveApp('sync.png'),
});
