const { add, subtract, divide } = require("./calculator.js");

describe("Calculator tests", () => {
  describe("Division tests", () => {
    test("Division by 0 throws error", () => {
      try {
        divide(1, 0);
      } catch (err) {
        expect(err).not.toBeNull();
      }
    });
  });

  test("function add adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("function subtract subtract second operand from first", () => {
    expect(subtract(4, 2)).toMatchInlineSnapshot(`2`);
  });
});
