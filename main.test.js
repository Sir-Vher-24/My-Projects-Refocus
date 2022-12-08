import { sort, search, newsList } from "./main.js";
//Example testing for search function
test("Search function testing", () => {
  var i = 0 ; i <newsList.length ; i ++
  expect(search("what")).toContain(newsList[i]);
});
test("Sort function testing", () => {
  expect(sort(type)).toBe(sort());
});