function getPropertyByPath(object, pathToProperty) {
  const arrayOfPathTokens = pathToProperty.split(".");

  if (arrayOfPathTokens.length === 1) return object[pathToProperty];

  function getProperty(object, arrayOfPathTokens) {
    if (isNullish(object)) return object;
    if (!arrayOfPathTokens.length) return object;

    const nextPathToken = arrayOfPathTokens.shift();

    return getProperty(object[nextPathToken], arrayOfPathTokens);
  }

  return getProperty(object, arrayOfPathTokens);
}

const isNullish = (value) => value === undefined || value === null;
