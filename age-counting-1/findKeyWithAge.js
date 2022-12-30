const { default: axios } = require('axios');
const findKeyWithAge = async (url) => {
    //get request
    const response = await axios.get(url);
    const data = response.data.data;
    const elements = data.split(", ")
    let currentKey = "";

    const keysForAge = [];

    for (const element of elements) {
        //split the element on "="
        const [key, value] = element.split("=");
        console.log(value);
        //if key is "name" store it in currentKey
        if (key.trim() === "key") {
            currentKey = value.trim();
        }
        console.log(currentKey);
        //if key is "age" store it in the keyWithAge 
        if (key.trim() === "age" && Number(value.trim() == 30)) {
            keysForAge.push(currentKey);
        }
    }
    console.log(keysForAge);
    return keysForAge;

    
}


//* Driver
const url = "https://coderbyte.com/api/challenges/json/age-counting"
console.log( await findKeyWithAge(url));