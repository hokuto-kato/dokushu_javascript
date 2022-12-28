window.greeting = 'こんにちは'
function hello () {
	console.log(this.greeting)
}

const gorilla = {
	greeting: 'ウホウホ',
	hello
}

// setTimeout(gorilla.hello, 2000) // ⑤ こんにちは
setTimeout(gorilla.hello.bind(gorilla), 2000)
