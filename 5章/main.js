const obj = {
	prop1: 10,
	prop2: '文字列',
	prop3: 20,
	skip: 20,
	prop4: true,
	prop5: 23,
	prop6: 47
}
let sum = 0 //sumに値を加算していく

for (let objElement of Object.entries(obj)) {
	const key = objElement[0]
	const value = objElement[1]
	if (key !== "skip" && typeof value === "number"){
		sum += value
	}
}
console.log(sum)
