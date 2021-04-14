import data from './data.json'

// const allItems = data.map((item) => { return item.category })
const categories = data.map( item => item.category )
// console.log(allItems)

const categoryObjects = categories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
}, {})
console.log(categoryObjects)

const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = data.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (obj[cat] === undefined) {
    // if so add 
        obj[cat] = 1
    // else 
    } else {
      // set this key with a value of 1
      obj[cat] += 1
    }
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!

console.log(categoriesWithCounts)

const productCount = categoriesUnique.reduce((acc, item) => {
    acc.push({ name: item, count: categoriesWithCounts[item] })
    return acc
}, [])

console.log(productCount)

export {
    categories,
    categoriesUnique,
    productCount,

}
export default data
