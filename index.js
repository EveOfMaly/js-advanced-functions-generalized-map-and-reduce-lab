// Add your functions here


function map(array, callback) {
    let newArray = []
    // for (let i = 0; newArray.length; i++) {
    //     return functionJob(newArray[i])
    // }

    array.forEach((value, index) => {
        newArray.push(callback(array[index]))
    })


    return newArray
   
}

sourceArray = [1,2,3]

function reduce(SourceArray, callback, startingPoint ) {

    let total 
    if (startingPoint) {
        total = startingPoint

        SourceArray.forEach((value, index) => {
            total = callback(SourceArray[index], total )
        })
        return total
    } else {
  
        total = SourceArray[0]

        SourceArray.forEach((value, index) => {
            total = callback(SourceArray[index], total )
        })
        return total
    }
}





