class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUser() {
    const exeptThreeNumbersInRow = new RegExp("^(?!.*[0-9]{4})[A-Za-z0-9_0]+");
    const numbersLatinSymbolsAndDashesAccepted = new RegExp(
      "^[^0-9-_][A-Za-z0-9_-]+"
    );
    const lastNotNumbersDashes = new RegExp("[A-Za-z0-9_-]*[A-Za-z]+$");

    return (
      exeptThreeNumbersInRow.test(this.name) &&
      numbersLatinSymbolsAndDashesAccepted.test(this.name) &&
      lastNotNumbersDashes.test(this.name)
    );
  }
}

export default Validator;
