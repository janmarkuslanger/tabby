/**
 * returns an array of next element siblings
 *
 * @param {HTMLElement}
 * @return {Array}
 */
export const getSiblings = (element) => {
  const arrayContainer = [element];

  let nextElement = element.nextElementSibling;

  if (!nextElement) {
    return arrayContainer;
  }

  while (nextElement) {
    arrayContainer.push(nextElement);

    nextElement = nextElement.nextElementSibling;
  }

  return arrayContainer;
};

/**
* @param {HTML Element} element
*/
export const show = (element) => {
  /* eslint-disable */
  element.style.display = 'block';
  /* eslint-enable */
};

/**
* @param {HTML Element} element
*/
export const hide = (element) => {
  /* eslint-disable */
  element.style.display = 'none';
  /* eslint-enable */
};
