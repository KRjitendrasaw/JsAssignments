function CreateObject(arr) {
    // Write your code here
    let res = {}
    for(let i=0 ; i<arr.length ; i+=2){
        res[arr[i]] =arr[i+1]
    }
    return res
}

module.exports = CreateObject;
