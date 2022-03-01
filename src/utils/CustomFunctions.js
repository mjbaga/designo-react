
const splitClasses = (classes, styleNamespace) => {
  const splitClass = classes ? classes.split(' ') : '';
  let classString = [];

  if(splitClass.length) {
    splitClass.forEach((className) => {
      classString.push(styleNamespace[className]);
    });
  }

  console.log(classString);

  return classString;
}

export { splitClasses };