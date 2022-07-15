let arr = ["Anthony Denis", "Axel Kirac", "Daniela Co", "Doriano Vanvolcksom", "Dylan Marcot", 
"Eddy Vervoort", "Hazem Maddouri", "Julien Scourneau", "Julien Elinckx", "Kamilla Moraes", 
"Luca Friquet", "Quentin Macq", "Rinaldo Benacceta", "Vincent Devilers"]

function pickLearner(inputArr, n) {
    let arr = []
    let length = inputArr.length
    console.log(length)
    for (let index = 0; index < n; index++) {
        let index = parseInt(Math.random() * length)
        arr.push(inputArr[index])
    }
    return arr
}

console.log(pickLearner(arr, 4))