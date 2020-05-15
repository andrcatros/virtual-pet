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
  const testPet = new Pet('test')
  testPet.age = 42;
  it("throws an error when a Pet object's isAlive property is false", () => {
    expect(()=>testPet.growUp()).toThrowError("Your pet is no longer alive :(")
  })
})

describe("Pet.growUp()", () => {
  const testPet = new Pet('Rex')
  testPet.fitness= 10;
  testPet.growUp()
  it("decreases a Pet object's fitness in 3-point decrements", () => {
    expect(testPet.fitness).toEqual(7);
  })
})

describe("Pet.walk()", () => {
  const testPet = new Pet ('Fido')
  testPet.walk()
  testPet.walk()
  testPet.walk()
  it("increases a Pet object's fitness in 4-point incremenents", () => {
    expect(testPet.fitness).toEqual(10);
    })
  })

  describe("Pet.walk()", () => {
    const testPet = new Pet('test')
    testPet.fitness = -1;
    it("throws an error when a Pet object's isAlive property is false", () => {
      expect(()=>testPet.walk()).toThrowError("Your pet is no longer alive :(")
    })
  })

describe("Pet.feed()", () => {
  const testPet= new Pet ('Cookie')
  testPet.feed()
  testPet.feed()
  testPet.feed()
  testPet.feed()
  it("decreases a Pet object's hunger level by 3-point decrements", () => {
    expect(testPet.hunger).toEqual(0);
  })
})

describe("Pet.checkUp()", () => {
  const testPet = new Pet('Cookie')
  const testPet2 = new Pet('Alex')
  testPet.hunger = 5
  testPet2.fitness = 4
  testPet2.hunger = 0
  it("returns how a Pet object is feeling based on their hunger and fitness levels", () => {
    expect(testPet.checkUp()).toEqual('I am hungry')
    expect(testPet2.checkUp()).toEqual('I feel great!')
  })
})

describe("Pet.isAlive()", () => {
  const testPet = new Pet('Laika')
  const testPet2 = new Pet('Muttnik')
  testPet.age = 31
  testPet2.hunger = 7
  it("returns false if a Pet's fitness is <=0, hunger is >=10 or age is >=30", () => {
    expect(testPet.isAlive).toBe(false)
    expect(testPet2.isAlive).toBe(true)
  })
})
