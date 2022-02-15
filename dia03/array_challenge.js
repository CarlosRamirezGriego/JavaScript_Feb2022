var arrayTest = [1,2,3,4,5,6,7]
var arrayRes = []

arrayTest.forEach(element => {
    arrayRes.unshift(element)
})

console.log(arrayRes)