
import { lazy } from 'react';

const splitClasses = (classes, styleNamespace) => {
  const splitClass = classes ? classes.split(' ') : '';
  let classString = [];

  if(splitClass.length) {
    splitClass.forEach((className) => {
      classString.push(styleNamespace[className]);
    });
  }

  return classString;
}

const lazyDelayed = function async (module, delay = 800) {
  return lazy(() => Promise.all([
    module,
    new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
  ]).then(([module]) => module));
}

export { splitClasses, lazyDelayed };

