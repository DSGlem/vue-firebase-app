export const validators = {
    onlyLetters: (val) => {
        return /^[a-zA-Z]+$/.test(val);
    }
}