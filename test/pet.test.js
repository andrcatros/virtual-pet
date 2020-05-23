const { Pet } = require('../src/pet');

describe("Pet", () => {
  test("returns a new Pet object", () => {
  expect(new Pet('Alex','dog')).toBeInstanceOf(Object)});})

describe("Pet", () => {
  it("returns a new Pet object with the property 'name'", () =>{
  expect(new Pet('Alex','dog').name).toEqual('Alex')})})

describe("Pet.age", () => {
  it("returns a Pet object's age property, initially set to 0", () => {
    expect(new Pet('Andy','dog').age).toEqual(0);
  })
});

describe("Pet.growUp()", () => {
  const testPet = new Pet('Andy','dog')
  testPet.growUp()
  it("increases a Pet object's age in 1-point increments & hunger in 5-point increments", () => {
    expect(testPet.age).toEqual(1);
    expect(testPet.hunger).toEqual(5);
  })
})

describe("Pet.growUp()", () => {
  const testPet = new Pet('test','dog')
  testPet.age = 42;
  it("throws an error when a Pet object's isAlive property is false", () => {
    expect(()=>testPet.growUp()).toThrowError("Your pet is no longer alive :(")
  })
})

describe("Pet.growUp()", () => {
  const testPet = new Pet('Rex', 'dog')
  testPet.fitness= 10;
  testPet.growUp()
  it("decreases a Pet object's fitness in 3-point decrements", () => {
    expect(testPet.fitness).toEqual(7);
  })
})

describe("Pet.walk()", () => {
  const testPet = new Pet ('Fido','dog')
  testPet.walk()
  it("increases a Pet object's fitness in 4-point incremenents", () => {
    expect(testPet.fitness).toEqual(14);
    })
  })

  describe("Pet.walk()", () => {
    const testPet = new Pet('test','dog')
    testPet.fitness = -1;
    it("throws an error when a Pet object's isAlive property is false", () => {
      expect(()=>testPet.walk()).toThrowError("Your pet is no longer alive :(")
    })
  })

describe("Pet.feed()", () => {
  const testPet= new Pet ('Cookie','dog')
  testPet.feed()
  testPet.feed()
  testPet.feed()
  testPet.feed()
  it("decreases a Pet object's hunger level by 3-point decrements", () => {
    expect(testPet.hunger).toEqual(0);
  })
})

describe("Pet.checkUp()", () => {
  const testPet = new Pet('Cookie','dog')
  const testPet2 = new Pet('Alex','dog')
  testPet.hunger = 5
  testPet2.fitness = 4
  testPet2.hunger = 0
  it("returns how a Pet object is feeling based on their hunger and fitness levels", () => {
    expect(testPet.checkUp()).toEqual('I am hungry')
    expect(testPet2.checkUp()).toEqual('I feel great!')
  })
})

describe("Pet.isAlive()", () => {
  const testPet = new Pet('Laika','dog')
  const testPet2 = new Pet('Muttnik','dog')
  testPet.age = 100
  testPet2.hunger = 7
  it("returns false if a Pet's fitness is <=0, hunger is >=10 or age is >=30", () => {
    expect(testPet.isAlive()).toBe(false)
    expect(testPet2.isAlive()).toBe(true)
  })
})

describe("Pet.adoptChild()", () => {
  const testPet = new Pet('Laika','dog')
  const Billy = new Pet ('Billy','dog')
  testPet.adoptChild(Billy)
  it("adds a pre-existing Pet object to other Pet object's children array property", () => {
    expect(testPet.children).toBeInstanceOf(Array)
    expect(testPet.children[0]).toBe(Billy)
  })
})

describe("Pet.haveChild()", () => {
  const testPet = new Pet('Mut', 'dog')
  testPet.haveChild('Amelia');
  it("when passed a name string, adds a Pet object to the parent Pet object's children array property", () => {
    expect(testPet.children).toBeInstanceOf(Array)
    expect(testPet.children[0]).toBeInstanceOf(Object)
    expect(testPet.children[0].name).toBe('Amelia')
  })
})