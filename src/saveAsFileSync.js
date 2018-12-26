import { writeFileSync } from 'fs';

const saveAsFileSync = ({
  dataURI,
  dest,
}) => {
  writeFileSync(
    dest,
    dataURI.split(';base64,').pop(),
    { encoding: 'base64' },
  );
};

export default saveAsFileSync;
