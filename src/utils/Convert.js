export const ConvertStateToKeys = (init,property) => {
    return Object.keys(init).reduce((acc,key) => {
        acc[key] = init[key][property]
        return acc;
    },{})
}

export const ConvertKeysToState = (init) => {
    return Object.keys(init).reduce((acc,key) => {
        acc[key] = {
            value : init[key],
            focused : false,
            touched : false,
            error : '',
        }
        return acc;
    },{})
    
}