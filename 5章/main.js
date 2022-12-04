const array = []
const propDesc = Reflect.getOwnPropertyDescriptor(array, 'length')
console.log(propDesc.enumerable)
