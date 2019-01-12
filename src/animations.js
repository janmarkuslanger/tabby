/**
 * fade out an element
 * @type {HTML Element}
 */
export const fadeOut = (element) => {

    let opacity = 1;
    const step = .05;

    const run = requestAnimationFrame(() => {
        if (opacity === 0) {
            cancelAnimationFrame(run);
        } else {
            opacity -= step;
            element.style.opacity = opacity.toString();
        }
    });
};
