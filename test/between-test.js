import { assert } from 'chai';

import between from '../esm/between';
import { base64DataURI } from './data';

setTimeout(() => {
  describe('between.js', () => {

    it('从 `data:image/png;base64,iVBOR...` 中获取到 `image/png`', () => {
      assert.equal(
        between(
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
