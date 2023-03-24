class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUser() {
    const exeptThreeNumbersInRow = '^(?!.*[0-9]{3})[^0-9-_]$';
    const numbersLatinSymbolsAndDashesAccepted = '[^0-9-_][A-Za-z_-]+';
    const lastNotNumbersDashes = '[^0-9-_]$';
    const sumOfRules = new RegExp(
      `${exeptThreeNumbersInRow}${numbersLatinSymbolsAndDashesAccepted}${lastNotNumbersDashes}`,
    );

    return sumOfRules.test(this.name);
  }

  /* validateUser() {
    const exeptThreeNumbersInRow = new RegExp(
      "^(?!.*[0-9]{3})[^0-9-_][w-]+"
    );
    return exeptThreeNumbersInRow.test(this.name);
  } */
}

export default Validator;
