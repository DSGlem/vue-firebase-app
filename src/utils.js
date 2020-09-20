export const validators = {
  lettersWithSpace: (val) => {
    return /^([a-zA-Z]+[ ]?)+$/.test(val);
  },
};
