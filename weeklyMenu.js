const menu = require('./src/menu')
const appetizers = require('./src/courses/appetizers')
const mains = require('./src/courses/mains')
const desserts = require('./src/courses/desserts')
const daysOfTheWeek = require('./src/daysOfTheWeek')

appetizers.forEach(appetizer => menu.addDishToCourse('appetizers', appetizer))
mains.forEach(main => menu.addDishToCourse('mains', main))
desserts.forEach(dessert => menu.addDishToCourse('desserts', dessert))

console.log('==============================================================')
console.log('====================== 🧑‍🍳 Weekly menu 👩‍🍳 =====================')
console.log('==============================================================')
daysOfTheWeek.forEach(day => {
  console.log(`\n${day}: ${menu.generateRandomMeal()}\n`)
})
console.log('==============================================================')
console.log('===================== 🥐 Bon appétit! 🥪 =====================')
console.log('==============================================================')
