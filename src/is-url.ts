/**
 * check if a string is a URL
 *
 * @param   {string}     url -     url to be checked
 * @returns {boolean}    result    boolean value representing if argument is a valid URL
 */
const isUrl = (url: string): boolean => {
  // eslint-disable-next-line max-len
  // SOURCE: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url#answer-5717133
  const urlRegex = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return urlRegex.test(url);
};

export default isUrl;
