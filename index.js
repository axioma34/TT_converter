const arrToString = (arr) => {
    return new Promise((resolve, reject) => {
        resolve(arr.reduce((r, v, i) => r += arr[i+1] === v+1 && arr[i-1] === v-1 ? '' : v+(arr[i+2]-2 === v ? '-' : !arr[i+1] ? '' :',')
            , ''))
    })
}
module.exports = arrToString

