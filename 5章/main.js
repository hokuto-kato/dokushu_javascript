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
	if (objElement[0] !== "skip" && typeof objElement[1] === "number"){
		sum += objElement[1]
	}
}
console.log(sum)
