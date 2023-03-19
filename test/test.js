import Validator from "../src/js/app";

test("validate logins by Validator method", () => {
  const validatorLogins = new Validator("Yana1995j");
  const result = validatorLogins.validateUser();
  expect(result).toBe(false);
});
