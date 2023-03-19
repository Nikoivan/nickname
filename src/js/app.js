/*class Validator {    
    validateUser(name) {
      return /^(?!.*[\d]{3})[^\d-_][\w-]+[^\d-_]$/.test(name);
    }
  }*/

// ниженаписанный метод, реализован так, потому как вышеперечисленная реализация
// - не нравится Eslint и он выдает ошибку
class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUser() {
    return /^(?!.*[\d]{3})[^\d-_][\w-]+[^\d-_]$/.test(this.name);
  }
}

export default Validator;
