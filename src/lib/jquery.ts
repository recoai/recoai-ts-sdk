function clipNum(value, min, max) {
  let out = value;
  if (value < min) {
    out = min;
  } else if (value > max) {
    out = max;
  }
  return out;
}

export function isInViewport(el) {
  const elementTop = $(el).offset().top;
  const elementBottom = elementTop + $(el).outerHeight();
  const elementHeight = $(el).outerHeight();
  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();
  const visibleElementHeight =
    clipNum(elementBottom, viewportTop, viewportBottom) -
    clipNum(elementTop, viewportTop, viewportBottom);
  const percentVisible = visibleElementHeight / elementHeight;
  return (
    percentVisible > 0.7 &&
    elementBottom > viewportTop &&
    elementTop < viewportBottom
  );
}

// $.fn.isInViewport = function () {
// const elementTop = $(this).offset().top;
// const elementBottom = elementTop + $(this).outerHeight();
// const elementHeight = $(this).outerHeight();
// const viewportTop = $(window).scrollTop();
// const viewportBottom = viewportTop + $(window).height();
// const visibleElementHeight =
//   clipNum(elementBottom, viewportTop, viewportBottom) -
//   clipNum(elementTop, viewportTop, viewportBottom);
// const percentVisible = visibleElementHeight / elementHeight;
// return (
//   percentVisible > 0.7 &&
//   elementBottom > viewportTop &&
//   elementTop < viewportBottom
// );
// };
