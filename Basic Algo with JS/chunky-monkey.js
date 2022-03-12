function chunkArrayInGroups(arr, size) {
  return arr.reduce((resultArr, item, index)=>{
        const chunkSize = Math.floor(index/size);
        if(!resultArr[chunkSize])
        {
            resultArr[chunkSize] = [];
        }
        resultArr[chunkSize].push(item);
        return resultArr;
    }, [])
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);