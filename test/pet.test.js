const Pet = require('../src/pet');

describe("Pet", () => {
  it("returns a new Pet object", () => {
  expect(new Pet('Alex')).toBeInstanceOf(Object)})})


describe("Pet", () => {
  it("returns a new Pet object with the property 'name'", () =>{
  expect(new Pet('Alex').name).toEqual('Alex')})})
