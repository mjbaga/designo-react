
// import { lazy } from 'react';

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

// const lazyDelayed = (path, delay = 3000) => {
//   return lazy(() => Promise.all([
//     import(path),
//     new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
//   ]).then(([module]) => module));
// }

export { splitClasses };

