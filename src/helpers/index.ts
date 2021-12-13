function unproxify(proxyObject:Object){
    const stringified = JSON.stringify(proxyObject);
    return JSON.parse(stringified)

}

export {unproxify}