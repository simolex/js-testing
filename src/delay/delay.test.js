const delay = require("./delay");

describe("delay", () => {
  test("Корректное значения", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
