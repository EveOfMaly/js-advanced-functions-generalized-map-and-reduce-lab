// Add your functions here


function map(array, callback) {
    let newArray = []
    // for (let i = 0; newArray.length; i++) {
    //     return functionJob(newArray[i])
    // }

    array.forEach((value, index) => {
        newArray.push(callback(value))
    })

    return newArray
   
}


function reduce(array, callback, startingPoint ) {

    let total 
    if (startingPoint) {
        total = startingPoint

        array.forEach((value, index) => {
            total = callback( value, total )
        })

        return total
    } else {
      
        total = array[0]
        console.log(total)

        //I better use-case vs foreach.
        // array.forEach((value, index) => {
        //     total = callback(value, total )
        //     console.log(total)
        // })

        for (let i = 1; i < array.length ; i++) {
            total = callback(array[i], total )
        }
        return total
    }
}





