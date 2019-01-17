/**
  * returns an array of next element siblings
  *
  * @param {HTMLElement}
  *
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
 * @type {HTML Element} element
 */
export const show = (element) => {
    element.style.display = 'block';
}

/**
 * @type {HTML Element} element
 */
export const hide = (element) => {
    element.style.display = 'none';
}
