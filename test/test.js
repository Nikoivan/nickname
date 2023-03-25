import Validator from "../src/js/app";

test("validate logins by Validator method", () => {
  const validatorLogins = new Validator("Yana199j");
  const result = validatorLogins.validateUser();
  expect(result).toBe(true);
});
