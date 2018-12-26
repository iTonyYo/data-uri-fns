/**
 * 获取多个区间的实现，参见 https://git.io/fpv6D
 */

import size from 'lodash/_stringSize';

const between = (str, start, end) => (str.substring(
  str.indexOf(start) + size(start),
  str.indexOf(end),
));

export default between;
