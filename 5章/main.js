const array = [10, '文字列', 20, true, 23, 47]
let num = 0
for (const value of array) {
	if (typeof value === 'number') num += value
}
console.log(num)
