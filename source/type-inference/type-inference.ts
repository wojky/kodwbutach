// export {}

function removeProp<T extends object, P extends keyof T>(from: T, prop: P) {
    const {[prop]: removed, ...rest} = from;
    
    return rest;
}