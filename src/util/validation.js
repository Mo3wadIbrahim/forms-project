export function isEmpty(value) {
  return value.trim() === "";
}
export function isEqual(value1, value2) {
  return value1 === value2;
}
export const isValidEmail = (value) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
};
export const isValidPassword = (value) => {
  return RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$`,
  ).test(value);
};
