const obj = {
	prop1: 10,
	prop2: 20,
	skip: 20, // ───この値は加算しない
	prop3: 23,
	prop4: 47
}
let sum = 0
for (const key in obj) {
	if (key !== 'skip') {
		sum += obj[key]
	}
}
console.log(sum)
