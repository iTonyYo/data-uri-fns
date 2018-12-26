import { writeFile } from 'fs';

const saveAsFile = ({
  dataURI,
  dest,
}) => (new Promise((resolve, reject) => {
  writeFile(
    dest,
    dataURI.split(';base64,').pop(),
    { encoding: 'base64' },
    (err) => {
      if (!err) {
        resolve();
      }

      reject(new Error(err));
    },
  );
}));

export default saveAsFile;
