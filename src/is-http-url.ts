import isUrl from './is-url';

const isHttpUrl = (url: string): boolean => {
  let urlDetails: URL;

  if (isUrl(url)) {
    try {
      urlDetails = new URL(url);
    } catch (_) {
      return false;
    }

    return urlDetails.protocol === 'http:' || urlDetails.protocol === 'https:';
  }

  return false;
};

export default isHttpUrl;
