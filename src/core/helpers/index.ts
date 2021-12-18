import arrayShuffle from "array-shuffle";

function unproxify(proxyObject:Object){
    const stringified = JSON.stringify(proxyObject);
    return JSON.parse(stringified)

}

function shuffleArray<Type>(array:Array<Type>){
    return arrayShuffle(array)
}

export {unproxify,shuffleArray}