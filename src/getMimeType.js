import between from './between';

const getMimeType = str => between(str, 'data:', ';base64');

export default getMimeType;
