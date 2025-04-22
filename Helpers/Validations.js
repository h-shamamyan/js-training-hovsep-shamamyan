export default class Validations {
  static isString(input) {
    if (typeof input !== "string") {
      throw new Error("Name must be a string.");
    }
    return true;
  }

  static nameLength(input) {
    if (input.length < 2 || input.length > 15) {
      throw new Error("Name should be between 2 and 15 characters.");
    }
    return true;
  }
}
