let arr = [1, 2, 3, 4, 5,8,9]
let result = 0

for(let elem of arr){
    result = result + elem
}
result = result/arr.length
console.log(result)