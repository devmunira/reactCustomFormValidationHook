export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export const isEmptyObj = (obj) => {
    return Object.keys(obj).length == 0;
}