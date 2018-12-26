import { assert } from 'chai';

import getMimeType from '../esm/getMimeType';
import { base64DataURI } from './data';

setTimeout(() => {
  describe('getMimeType.js', () => {

    it('从 `data:image/png;base64,iVBOR...` 中获取到 `image/png`', () => {
      assert.equal(
        getMimeType(
          base64DataURI,
          'data:',
          ';base64'
        ),
        'image/png',
      );
    });

  });

  run();
}, 0);
