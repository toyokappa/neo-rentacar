export const groupBy = function(xs, keys) {
  return xs.reduce(function(rv, x) {
    (rv[search(x, keys)] = rv[search(x, keys)] || []).push(x);
    return rv;
  }, {});
};

const search = (data, keys) => {
    return keys.reduce((current, key) => {
        try{
            return current[key]
        } catch(e) {
            return undefined
        }
    }, data)
}