function printKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

function sumValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key];
        }
    }
    console.log(`Sum of all values: ${sum}`);
}

let testObject = {
    key1: 40,
    key2: 491, 
    key3: 991, 
    key4: 819, 
    key5: 138, 
    key6: 481
};

printKeysAndValues(testObject);
sumValues(testObject);