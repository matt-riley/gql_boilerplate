// This will check the query path.
// This can be useful if there are places in the schema which have the same
// type but use different resolvers/connectors to obtain the data.
// Pass in ast.path as `obj`.
// Use the 'Type' which will determine the resolver/connector as `type`
// Will return `true` if `type` exists in the path.

export function checkPath(obj, type) {
  return Object.keys(obj).some((key) => {
    const current = obj[key];
    if (type.indexOf(current) !== -1) {
      return true;
    }

    if (typeof current === 'object' && current !== null) {
      return checkPath(current, type);
    }
    return false;
  });
}