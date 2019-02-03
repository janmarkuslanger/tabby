/**
* fade out an element
* @type {HTML Element} el
* @type {Function} cb
*/
export const fadeOut = (el, cb) => {
  const element = el;
  let opacity = 1;
  const step = 0.05;

  function run() {
    if (opacity > 0) {
      opacity -= step;
      element.style.opacity = opacity.toString();
      requestAnimationFrame(run);
    } else {
      cancelAnimationFrame(run);
      if (cb) {
        cb(element);
      }
    }
  }

  requestAnimationFrame(run);
};

/**
* fade out an element
* @type {HTML Element} el
* @type {Function} cb
*/
export const fadeIn = (el, cb) => {
  const element = el;
  let opacity = 0;
  const step = 0.05;

  function run() {
    if (opacity < 1) {
      opacity += step;
      element.style.opacity = opacity.toString();
      requestAnimationFrame(run);
    } else {
      cancelAnimationFrame(run);
      if (cb) {
        cb(element);
      }
    }
  }

  requestAnimationFrame(run);
};
