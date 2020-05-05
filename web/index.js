const appetizers = [
  'Ceasar salad',
  'Cherry tomatos and letuce salad',
  'Avocado salad',
  'French fries',
  'Cheese and olives',
  'Basil, cherry tomato, and mozzarella cheese\'s sticks',
  'Cheese fingers',
  'Cheese balls',
  'Pao de Queijo',
  'Garlic bread',
  'Carrots\' sticks',
  'Rocket salad',
  'Maionese',
  'Brocoli, apple, red onion, and yougurt salad',
  'Salpicao',
  'Cuscus salad',
  'Stuffed avocado',
  'Pineaple quezadilla',
  'Farofa da Cle'
]

const desserts = [
  'Ice cream',
  'Cake',
  'Coffee',
  'Tea',
  'Juice',
  'Coke',
  'Fruits',
  'Water',
  'Romeo and Juliet',
  'Space cake'
]

const mains = [
  'Brazilian rice and beans',
  'Pasta Bolognese',
  'Pasta Pesto',
  'Pasta Alfredo',
  'Tortei',
  'Raviolli',
  'Leek risotto',
  'Aspargus risotto',
  'Portuguese pizza',
  'Brocoli pizza',
  'California pizza',
  'Canja',
  'Pumpkin soup',
  'Vegetables soup',
  'Minestrone soup',
  'Pea soup',
  'Capeletti soup',
  'Lentils soup',
  'Beans soup',
  'Burrito in the oven',
  'Rice with lentils Bolognese salsa, cheese, and chips in the oven',
  'Ramen',
  'Yakisoba',
  'Hot Dog',
  'Stuffed potato',
  'Spanish tortilla',
  'Pancakes',
  'Lentils Bolognese',
  'Ala Minuta',
  'Sandwich',
  'Hamburger',
  'Burrito bowl',
  'Polenta with sauce',
  'Falafel pita',
  'Falafel plate',
  'Stuffed belpepper',
  'Fondue',
  'Lasagna bolognese',
  'Stuffed pumpkin',
  'Zucchini pizza',
  'Ensopadinho de batata',
  'Mashed potato',
  'Escondidinho',
  'Carreteiro de linguica',
  'Carreteiro de grao de bico',
  'Strogonoff',
  'Ervilha torta com ovo e molho vermelho',
  'Japo tofu vegetables',
  'Curry with tofu and vegetables, and rice',
  'Arepas with beans, avocado and banana',
  'Gnocchi'
]

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers
  },
  get mains () {
    return this._courses.mains
  },
  get desserts () {
    return this._courses.desserts
  },
  set appetizers (appetizers) {
    this._courses.appetizers = appetizers
  },
  set mains (mains) {
    this._courses.main = mains
  },
  set desserts (desserts) {
    this._courses.desserts = desserts
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName) {
    const dish = {
      name: dishName
    }
    return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    return `${appetizer.name}, ${main.name}, and ${dessert.name}.`
  }
}

const generateWeeklyMenuButton = document.getElementById('weekly-menu-btn')
const menuDiv = document.getElementById('menu')

appetizers.forEach(appetizer => menu.addDishToCourse('appetizers', appetizer))
mains.forEach(main => menu.addDishToCourse('mains', main))
desserts.forEach(dessert => menu.addDishToCourse('desserts', dessert))

generateWeeklyMenuButton.onclick = () => {
  menuDiv.innerHTML = ''

  const mondayMenu = document.createElement('p')
  const tuesdayMenu = document.createElement('p')
  const wednesdayMenu = document.createElement('p')
  const thursdayMenu = document.createElement('p')
  const fridayMenu = document.createElement('p')
  const saturdayMenu = document.createElement('p')
  const sandayMenu = document.createElement('p')

  mondayMenu.innerHTML = `<span class="day-of-the-week">Monday:</span> ${menu.generateRandomMeal()}`
  tuesdayMenu.innerHTML = `<span class="day-of-the-week">Tuesday:</span> ${menu.generateRandomMeal()}`
  wednesdayMenu.innerHTML = `<span class="day-of-the-week">Wednesday:</span> ${menu.generateRandomMeal()}`
  thursdayMenu.innerHTML = `<span class="day-of-the-week">Thursday:</span> ${menu.generateRandomMeal()}`
  fridayMenu.innerHTML = `<span class="day-of-the-week">Friday:</span> ${menu.generateRandomMeal()}`
  saturdayMenu.innerHTML = `<span class="day-of-the-week">Saturday:</span> ${menu.generateRandomMeal()}`
  sandayMenu.innerHTML = `<span class="day-of-the-week">Sunday:</span> ${menu.generateRandomMeal()}`

  menuDiv.appendChild(mondayMenu)
  menuDiv.appendChild(tuesdayMenu)
  menuDiv.appendChild(wednesdayMenu)
  menuDiv.appendChild(thursdayMenu)
  menuDiv.appendChild(fridayMenu)
  menuDiv.appendChild(saturdayMenu)
  menuDiv.appendChild(sandayMenu)
}
