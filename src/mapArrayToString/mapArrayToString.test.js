const mapArrayToString = require("./mapArrayToString");

describe("mapArrayToString", () => {
  test("Корректное значения", () => {
    expect(mapArrayToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("В перемешку с мусорными значениями", () => {
    expect(mapArrayToString([1, 2, 3, null, undefined, "text"])).toEqual(["1", "2", "3"]);
  });
  test("Пустой массив", () => {
    expect(mapArrayToString([])).toEqual([]);
  });
  test("Отрицание", () => {
    expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
