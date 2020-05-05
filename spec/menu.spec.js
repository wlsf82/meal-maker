const menu = require('../src/menu')

describe('menu', () => {
  const appetizers = 'appetizers'
  const mains = 'mains'
  const desserts = 'desserts'

  const appetizer = 'Salad'
  const main = 'Pizza'
  const dessert = 'Cake'

  beforeAll(() => {
    menu.addDishToCourse(appetizers, appetizer)
    menu.addDishToCourse(mains, main)
    menu.addDishToCourse(desserts, dessert)
  })

  describe('getRandomDishFromCourse', () => {
    it(appetizers, () => {
      const actualResult = menu.getRandomDishFromCourse(appetizers)
      const expectedResult = { name: appetizer }

      expect(actualResult).toEqual(expectedResult)
    })

    it(mains, () => {
      const actualResult = menu.getRandomDishFromCourse(mains)
      const expectedResult = { name: main }

      expect(actualResult).toEqual(expectedResult)
    })

    it(desserts, () => {
      const actualResult = menu.getRandomDishFromCourse(desserts)
      const expectedResult = { name: dessert }

      expect(actualResult).toEqual(expectedResult)
    })
  })

  it('generateRandomMeal', () => {
    const actualResult = menu.generateRandomMeal()
    const expectedResult = `${appetizer}, ${main}, and ${dessert}.`

    expect(actualResult).toEqual(expectedResult)
  })
})
