import isUrl from './is-url';

/**
 * check if a string is a valid HTTP URL
 *
 * @param   {string}     url -     url to be checked
 * @returns {boolean}    result    boolean value representing if argument is a valid HTTP URL
 */
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
