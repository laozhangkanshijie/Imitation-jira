export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    console.log(value);
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  console.log("re", result);
  return result;
};
