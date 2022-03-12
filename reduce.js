//reduce has 4 agrs - prvious value, current value, index, object/element
//optional args - initialvalue

//if empty array and intial value provided
const getmax = (a, b) => Math.max(a, b);
console.log([].reduce(getmax, 10)); //initial value printed

const arr = [10, 20, 30, 40, 50];
let sumOfArray = arr.reduce((previous, current)=>
    previous + current, 10);
console.log(sumOfArray);

function reducer(pre, curr, index, arr)
{
    const returns = pre + curr;
    console.log(`Previous: ${pre}, current: ${curr}, index:${index}, returns:${returns}`);
    return returns;
}
arr.reduce(reducer);

//sum of object values
let initailValue = 0;
let sum = [{x:1}, {x:2}, {x:3}].reduce((pre, curr)=>
    pre + curr.x, initailValue
);
console.log(sum);

//Flatten an array of arrays
let flatten = [[1, 2], [2,3]].reduce((pre, curr)=>
    pre.concat(curr)
)
console.log(flatten);

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

function groupBy(objArr, objProp)
{
    return objArr.reduce(function(acc, obj){
        //console.log(acc);
        let key = obj[objProp];
        if(!acc[key])
        {
            //console.log(acc[key])
            acc[key] = [];
            //console.log(acc[key])
        }
        acc[key].push(obj)
        return acc
    }, {})
}

let groupPeople = groupBy(people, 'age');
console.log(groupPeople);

function chunkArrayInGroups(arr, size) {
    return arr.reduce((resultArr, item, index)=>{
        console.log('before intialize');
        console.log(resultArr);
        console.log(index);
        const chunkSize = Math.floor(index/size);
        console.log(chunkSize);
        if(!resultArr[chunkSize])
        {
            console.log('after intialize');
            resultArr[chunkSize] = [];
            console.log(resultArr);
        }
        resultArr[chunkSize].push(item);
        return resultArr;
    }, [])
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));