let globalVar = 5;

function precedingGlobalInLocal()
{
    let globalVar = 10;
    console.log(globalVar);
}
console.log(globalVar)
precedingGlobalInLocal();