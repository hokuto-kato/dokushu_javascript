const delayMessageFactory = (func, delay) =>
	message => {
		setTimeout(() => {
			func(message)
		}, delay)
	}
const dialog = delayMessageFactory(alert, 2000)
dialog('こんにちは')
// ２秒後にアラートで「こんにちは」と表示されます。
const log = delayMessageFactory(console.log, 1000)
log('こんばんは')
// １秒後にコンソールに「こんばんは」と表示されます。
