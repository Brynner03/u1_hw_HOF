// You must RETURN your result in each function!


  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
   let nums = [1,2,3,4]
   let numa = [32,43,53]
  
   nums.forEach((a) => {
     numa.unshift(nums)
   })
console.log(numa)


 
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */

   let newNum = []
   nums.forEach((n, index) => {
     newNum.push(n + index)
   })
   console.log(newNum)





  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   *
**/
let objects = [23,42,24,55]
const sum = objects.reduce((a,b) => {
  return a+b
})




  


  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
   let money = [12.34, 9.99]
   const dinero = money.map ((element) => {
  
      return element = `$${money}`
  
  })
   console.log(dinero)






  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
const value = values.filter(function(happy) {
  if(values.happy === true) {
    return true;
  }
})


  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7

  let objects = [23,42,24,55]
  const sum = objects.reduce((a,b) => {
    return a+b + 2
  })






  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */

  const strings= ['g','s','s'];
  const sum = strings.reduce((a,b) => {
    return a+b + ['2','4']
  })






//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
