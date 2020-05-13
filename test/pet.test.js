const Pet = require('../src/pet');

describe("Pet", () => {
  test("returns a new Pet object", () => {
  expect(new Pet('Alex')).toBeInstanceOf(Object)});})

describe("Pet", () => {
  it("returns a new Pet object with the property 'name'", () =>{
  expect(new Pet('Alex').name).toEqual('Alex')})})

describe("Pet.age", () => {
  it("returns a Pet object's age property, initially set to 0", () => {
    expect(new Pet('Andy').age).toEqual(0);
  })
});

describe("Pet.growUp()", () => {
  const testPet = new Pet('Andy')
  testPet.growUp()
  it("increases a Pet object's age in 1-point increments & hunger in 5-point increments", () => {
    expect(testPet.age).toEqual(1);
    expect(testPet.hunger).toEqual(5);
  })
})

describe("Pet.growUp()", () => {
  const testPet = new Pet('Rex')
  testPet.growUp()
  it("decreases a Pet object's fitness in 3-point decrements", () => {
    expect(testPet.fitness).toEqual(7);
  })
})