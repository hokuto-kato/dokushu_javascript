let position = { x: 0, y: 0 }

if (localStorage.getItem('position')) {
	position = JSON.parse(localStorage.getItem('position'))
	scrollTo(position.x, position.y)
}

setInterval(() => {
	position.x = scrollX
	position.y = scrollY
	const json = JSON.stringify(position)
	console.log(json)
	localStorage.setItem('position', json)
}, 1000)
