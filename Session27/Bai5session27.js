const splitArray = (array, size) => {
    if(!Array.isArray(array) || array.some((number) => !Number.isInteger(number)) || size <= 0 || !Number.isInteger(size)){
        return "Dữ liệu không hợp lệ";
    }

    const childrenArray = [];

    for(let i = 0; i < array.length; i += size){
        childrenArray.push(array.slice(i, i + size));
    }
    return childrenArray;
};

const numbers = [1,2,3,4,5,6];

const result = splitArray(numbers, 3);

console.log(result);