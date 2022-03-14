interface IJSON {
    [value: string | number] : any
}

export const jsonKeyExists = (json: IJSON, key: string): boolean =>
    Object.keys(json).includes(key)